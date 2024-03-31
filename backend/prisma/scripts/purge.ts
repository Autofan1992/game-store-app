import prisma from '../../lib/prisma'

const purge = async () => {
    await prisma.user.deleteMany({})
    console.log('❌ Purged all users')
    await prisma.game.deleteMany({})
    console.log('❌ Purged all games')
    await prisma.comment.deleteMany({})
    console.log('❌ Purged all comments')
}

export default purge
