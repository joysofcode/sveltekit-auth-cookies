import { fail, redirect } from '@sveltejs/kit'

import { db } from '$lib/server/database'

export const load = async ({ locals }) => {
	// redirect user if logged in
	if (!locals.user) {
		throw redirect(302, '/')
	}
}

export const actions = {
  updateAvatar: async ({ request, locals }) => {
    const data = await request.formData()
    const avatar = data.get('avatar')
    console.log(avatar)
    if (typeof avatar !== 'string' || !avatar) {
      return fail(400, { invalid: true })
    }
    await db.user.update({
      where: { username: locals.user.name },
      data: { avatar: avatar },
    })
  },

  updateDisplayName: async ({ request, locals }) => {
    const data = await request.formData()
    const displayName = data.get('displayName')
    console.log(displayName)
    if (typeof displayName !== 'string' || !displayName) {
      return fail(400, { invalid: true })
    }
    await db.user.update({
      where: { username: locals.user.name },
      data: { displayName: displayName },
    })
  }
}
