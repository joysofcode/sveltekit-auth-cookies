import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	// we only use this endpoint for the api
	throw redirect(302, '/')
}

export const actions: Actions = {
	default({ cookies }) {
		// eat the cookie
		cookies.set('session', '', {
			path: '/',
			expires: new Date(0),
		})

		// redirect the user
		throw redirect(302, '/login')
	},
}
