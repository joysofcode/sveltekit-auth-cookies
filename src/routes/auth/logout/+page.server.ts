import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ cookies, locals }) => {
	// redirect to `/login` if not logged in
	if (!locals.user) {
		throw redirect(302, '/auth/login')
	}

	// eat the cookie
	cookies.set('session', '', {
		path: '/',
		expires: new Date(0),
	})

	// and redirect
	throw redirect(302, '/')
}
