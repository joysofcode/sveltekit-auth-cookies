import type { GetSession, Handle } from '@sveltejs/kit'
import * as cookie from 'cookie'

import { db } from '$lib/database'

export const handle: Handle = async ({
  event,
  resolve,
}) => {
  const cookieHeader = event.request.headers.get('cookie')
  const cookies = cookie.parse(cookieHeader ?? '')

  if (!cookies.session) {
    return await resolve(event)
  }

  const session = await db.user.findUnique({
    where: { userAuthToken: cookies.session },
  })

  if (session) {
    event.locals.user = { username: session.username }
  }

  return await resolve(event)
}

export const getSession: GetSession = ({ locals }) => {
  if (!locals.user) return {}

  return {
    user: {
      username: locals.user.username,
    },
  }
}
