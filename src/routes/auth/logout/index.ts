import type { RequestHandler } from '@sveltejs/kit'
import * as cookie from 'cookie'

export const get: RequestHandler = async () => {
  return {
    status: 303,
    headers: {
      'Set-Cookie': cookie.serialize('session', '', {
        path: '/',
        // the cookie should expire immediately
        expires: new Date(0),
      }),
      location: '/',
    },
  }
}
