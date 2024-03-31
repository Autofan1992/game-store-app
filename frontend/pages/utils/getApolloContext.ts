import { getSession } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

export const getApolloContext = async ({
    req,
    res,
}: {
    req: NextApiRequest
    res: NextApiResponse
}) => {
    const { accessToken } = await getSession(req, res) || {}

    if (accessToken) {
        return {
            headers: {
                Authorization: `Bearer ${ accessToken }`,
            },
        }
    }
}

export default getApolloContext
