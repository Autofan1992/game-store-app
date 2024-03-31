import builder from '../../../lib/builder'

builder.prismaObject("Comment", {
    fields: (t) => ({
        id: t.exposeID("id"),
        createdAt: t.expose("createdAt", {
            type: "Date",
        }),
        updatedAt: t.expose("updatedAt", {
            type: "Date",
        }),
        text: t.exposeString("text"),
        game: t.relation("game"),
        user: t.relation("user"),
    }),
});