import { fail, redirect } from '@sveltejs/kit'

import { db } from '$lib/server/database'

export const load = async ({ locals }) => {
	// redirect user if logged in
	if (!locals.user) {
		throw redirect(302, '/')
	}
}