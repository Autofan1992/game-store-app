import prisma from '../../lib/prisma'
import { GraphQLError } from 'graphql/error'
import { pubsub } from '../../lib/pubsub'

export async function createContext({ request }: { request: Request }) {
    const authorization = request.headers.get('Authorization')

    if (!authorization) {
        return { pubsub }
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
            return { pubsub }
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

        return { user, pubsub }
    } catch (e) {
        if (!(e instanceof Error)) {
            // eslint-disable-next-line no-ex-assign
            e = new Error(e as string)
        }
        throw new GraphQLError((e as Error).message)
    }
}
