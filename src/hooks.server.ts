import type { Handle } from '@sveltejs/kit'
import { db } from '$lib/server/database'

/*
	You can use a custom redirect if you want...

	function redirect(location: string) {
		return new Response(undefined, {
			status: 303,
			headers: { location },
		})
	}

	...and redirect pages inside hooks.server.ts

	if (!session) {
		if (event.url.pathname === '/admin') {
			return redirect('/')
		}

		return await resolve(event)
	}

	...but doing it inside `load` for the protected
	routes you can invalidate the data on the page
*/

export const handle: Handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get('session')

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event)
	}

	// find the user based on the session
	let user = await db.session.findUnique({
		where: { id: session },
		select: { expiresAt: true, User: {select: {username: true, role: true}}},
	})

	if (!user) {
		// if the session doesn't exist delete the cookie
		event.cookies.set('session', '', {
			path: '/',
			expires: new Date(0),
		})
		return await resolve(event)
	}

	// if the session has expired
	if (user?.expiresAt < new Date()) {
		// delete the session
		await db.session.delete({ where: { id: session } })
		event.cookies.set('session', '', {
			path: '/',
			expires: new Date(0),
		})
		return await resolve(event)
	}
	user = user?.User

	// if `user` exists set `events.local`
	if (user) {
		event.locals.user = {
			name: user.username,
			role: user.role.name,
		}
	}
	// load page as normal
	return await resolve(event)
}
