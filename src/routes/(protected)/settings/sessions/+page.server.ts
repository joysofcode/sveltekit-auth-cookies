import { fail, redirect } from '@sveltejs/kit'

import { db } from '$lib/server/database'
import type { Session } from '@prisma/client'

export const load = async ({ locals, cookies }) => {
	// redirect user if logged in
	if (!locals.user) {
		throw redirect(302, '/')
	}

  let sessions = await db.user.findUnique({
    where: { username: locals.user.name},
    select: { sessions: {
      select: { id: true, createdAt: true, expiresAt: true, manipulator: true }
    } }
  })

  if (!sessions) {
    throw redirect(302, '/')
  }

  if (!sessions.sessions) {
    throw redirect(302, '/')
  }

  sessions = sessions.sessions as Session[]

  if (!sessions) {
    throw redirect(302, '/')
  }

  sessions.forEach(session => {
    session.current = session.id === cookies.get('session')
    if (session.current) {
      delete session.manipulator
    }
    delete session.id
  })

  return {sessions}
}

export const actions = {
	revoke: async({ request }) => {

		const data = await request.formData()
    const manipulator = data.get('manipulator')

		if (!manipulator) {
			throw redirect(302, '/settings/sessions')
		}

		//remove from db
		await db.session.delete({ where: { manipulator } })

		// seems like a nice place to clean up expired sessions
		await db.session.deleteMany({ where: { expiresAt: { lt: new Date() } } })

		// redirect the user
		throw redirect(302, '/settings/sessions')
	},
}