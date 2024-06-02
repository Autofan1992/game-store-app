import { handleAuth, handleLogin } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

export const GET = handleAuth({
    async login(req: NextApiRequest, res: NextApiResponse) {
        try {
            return await handleLogin(req, res, {
                authorizationParams: {
                    redirect_uri: `${process.env.AUTH0_BASE_URL}/auth/callback`
                }
            })
        } catch (error) {
            console.error(error)
        }
    }
})