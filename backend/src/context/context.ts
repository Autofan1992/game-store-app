import prisma from '../../lib/prisma'

export async function createContext({ request }: { request: Request }) {
    const authorization = request.headers.get('Authorization')

    if (!authorization) {
        return {}
    }

    try {
        const response = await fetch(
            `${process.env.AUTH0_ISSUER_BASE_URL}/userinfo`,
            {
                headers: {
                    authorization
                }
            }
        )

        if (!response.ok) {
            return {}
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
        console.warn(e)

        return {}
    }
}
