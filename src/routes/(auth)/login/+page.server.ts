import { fail, redirect } from '@sveltejs/kit'
import bcrypt from 'bcrypt'

import { db } from '$lib/server/database'

export const load = async ({ locals }) => {
	// redirect user if logged in
	if (locals.user) {
		throw redirect(302, '/')
	}
}

export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData()
		const username = data.get('username')
		const password = data.get('password')

		if (
			typeof username !== 'string' ||
			typeof password !== 'string' ||
			!username ||
			!password
		) {
			return fail(400, { invalid: true })
		}

		const user = await db.user.findUnique({ where: { username } })

		if (!user) {
			return fail(400, { credentials: true })
		}

		const userPassword = await bcrypt.compare(password, user.passwordHash)

		if (!userPassword) {
			return fail(400, { credentials: true })
		}

		// generate new auth token just in case
		// const authenticatedUser = await db.user.update({
		// 	where: { username: user.username },
		// 	data: { userAuthToken: crypto.randomUUID() },
		// })

		// create a new session
		const session = await db.session.create({
			data: {
				expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
				userId: user.id,
			}
		})

		console.log(session)

		cookies.set('session', session.id, {
			// send cookie for every page
			path: '/',
			// server side only cookie so you can't use `document.cookie`
			httpOnly: true,
			// only requests from same site can send cookies
			// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
			sameSite: 'strict',
			// only sent over HTTPS in production
			secure: process.env.NODE_ENV === 'production',
			// set cookie to expire after a month
			maxAge: 60 * 60 * 24 * 30,
		})

		// redirect the user
		throw redirect(302, '/')
	},
}
