import builder from '../../../lib/builder'
import { GamePlatform } from '@prisma/client'

const GameRef = builder.prismaObject("Game", {
    fields: (t) => ({
        id: t.exposeID("id"),
        createdAt: t.expose("createdAt", {
            type: "Date",
        }),
        updatedAt: t.expose("updatedAt", {
            type: "Date",
        }),
        ageLimit: t.exposeInt("ageLimit"),
        price: t.exposeFloat("price"),
        platform: t.expose("platform", {
            type: [GamePlatformRef],
        }),
        description: t.exposeString("description"),
        genre: t.exposeString("genre"),
        name: t.exposeString("name"),
        amount: t.exposeInt("amount"),
        likes: t.exposeInt("likes"),
        comments: t.relation("comments"),
        views: t.exposeInt("views"),
        image: t.relation("image"),
        user: t.relation("user"),
    }),
});

export default GameRef

export const GamePlatformRef = builder.enumType('GamePlatform', {
    values: Object.values(GamePlatform)
})
