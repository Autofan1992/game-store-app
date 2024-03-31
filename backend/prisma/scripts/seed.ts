import { GamePlatform, PrismaClient, UserRole } from '@prisma/client'
import purge from './purge'

const prisma = new PrismaClient()

const gamesToCreate = [
    {
        ageLimit: 12,
        price: 99.99,
        platform: [GamePlatform.Pc],
        description: 'Fullstack React framework 5',
        genre: 'Action',
        name: 'Spider man',

    },
    {
        ageLimit: 12,
        price: 99.99,
        platform: [GamePlatform.Playstation],
        description: 'Fullstack React framework 5',
        genre: 'Action',
        name: 'Spider man 2',
    }
]

const resourcesToCreate = [
    {
        name: 'random image',
        url: 'https://source.unsplash.com/random',
        mimeType: 'image/png',
    },
    {
        name: 'random image',
        url: 'https://source.unsplash.com/random',
        mimeType: 'image/png',
    },
    {
        name: 'random image',
        url: 'https://source.unsplash.com/random',
        mimeType: 'image/png',
    }
]

async function main() {
    await purge()

    await prisma.user.create({
        data: {
            email: 'test@test.com',
            role: UserRole.Admin,
        }
    })

    console.log('✅ Seeded user')

    await prisma.resource.createMany({
        data: resourcesToCreate
    })

    console.log('✅ Seeded images')

    const resources = await prisma.resource.findMany()

    const user = await prisma.user.findFirstOrThrow()

    await prisma.$transaction(
        gamesToCreate.map((game, idx) => prisma.game.createMany({
                data: {
                    ...game,
                    resourceId: resources[idx].id,
                    userId: user.id
                }
            })
        ))

    console.log('✅ Seeded games')

}

main()
    .then(() => {
        console.log('Data seeded 🌱')
        process.exit(0)
    })
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })

