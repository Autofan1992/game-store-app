import prisma from '../../lib/prisma'
import { GraphQLError } from 'graphql/error'

export async function createContext({ request }: { request: Request }) {
    const authorization = request.headers.get('Authorization')

    if (!authorization) {
        return {}
    }

    try {
        const response = await fetch(
            `${ process.env.AUTH0_ISSUER_BASE_URL }/userinfo`,
            {
                headers: {
                    authorization
                }
            }
        )

        if (!response.ok) {
            throw response.statusText
        }

        const { email } = await response.json()

        if (!email) {
            return {}
        }

        let user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            user = await prisma.user.create({
                data: {
                    email
                }
            })
        }

        return { user }
    } catch (e) {
        if (!(e instanceof Error)) {
            // eslint-disable-next-line no-ex-assign
            e = new Error(e as string)
        }
        throw new GraphQLError((e as Error).message)
    }
}
