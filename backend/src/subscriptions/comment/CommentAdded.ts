import builder from "../../../lib/builder";

builder.subscriptionField("commentAdded", (t) =>
    t.prismaField({
        type: 'Comment',
        subscribe: async (root, args, ctx) => {
            const { pubsub} = await ctx
            return pubsub.subscribe('comments')
        },
        resolve: (query, { comment }, args) => comment,
    })
);
