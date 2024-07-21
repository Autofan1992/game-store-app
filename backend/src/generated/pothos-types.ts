/* eslint-disable */
import type { Prisma, User, Game, Comment, Resource, Like, Rating, Cart, CartItem, Order, OrderItem, OrderStatusHistoryItem } from "D:\\pet-projects\\game-store-app\\backend\\src\\generated\\prisma-client";
export default interface PrismaTypes {
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: "comments" | "games" | "likes" | "ratings" | "cart" | "orders";
        ListRelations: "comments" | "games" | "likes" | "ratings" | "orders";
        Relations: {
            comments: {
                Shape: Comment[];
                Name: "Comment";
                Nullable: false;
            };
            games: {
                Shape: Game[];
                Name: "Game";
                Nullable: false;
            };
            likes: {
                Shape: Like[];
                Name: "Like";
                Nullable: false;
            };
            ratings: {
                Shape: Rating[];
                Name: "Rating";
                Nullable: false;
            };
            cart: {
                Shape: Cart | null;
                Name: "Cart";
                Nullable: true;
            };
            orders: {
                Shape: Order[];
                Name: "Order";
                Nullable: false;
            };
        };
    };
    Game: {
        Name: "Game";
        Shape: Game;
        Include: Prisma.GameInclude;
        Select: Prisma.GameSelect;
        OrderBy: Prisma.GameOrderByWithRelationInput;
        WhereUnique: Prisma.GameWhereUniqueInput;
        Where: Prisma.GameWhereInput;
        Create: {};
        Update: {};
        RelationName: "comments" | "image" | "user" | "likes" | "ratings" | "cart" | "orders";
        ListRelations: "comments" | "likes" | "ratings" | "orders";
        Relations: {
            comments: {
                Shape: Comment[];
                Name: "Comment";
                Nullable: false;
            };
            image: {
                Shape: Resource;
                Name: "Resource";
                Nullable: false;
            };
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
            likes: {
                Shape: Like[];
                Name: "Like";
                Nullable: false;
            };
            ratings: {
                Shape: Rating[];
                Name: "Rating";
                Nullable: false;
            };
            cart: {
                Shape: CartItem | null;
                Name: "CartItem";
                Nullable: true;
            };
            orders: {
                Shape: OrderItem[];
                Name: "OrderItem";
                Nullable: false;
            };
        };
    };
    Comment: {
        Name: "Comment";
        Shape: Comment;
        Include: Prisma.CommentInclude;
        Select: Prisma.CommentSelect;
        OrderBy: Prisma.CommentOrderByWithRelationInput;
        WhereUnique: Prisma.CommentWhereUniqueInput;
        Where: Prisma.CommentWhereInput;
        Create: {};
        Update: {};
        RelationName: "game" | "user";
        ListRelations: never;
        Relations: {
            game: {
                Shape: Game;
                Name: "Game";
                Nullable: false;
            };
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
        };
    };
    Resource: {
        Name: "Resource";
        Shape: Resource;
        Include: Prisma.ResourceInclude;
        Select: Prisma.ResourceSelect;
        OrderBy: Prisma.ResourceOrderByWithRelationInput;
        WhereUnique: Prisma.ResourceWhereUniqueInput;
        Where: Prisma.ResourceWhereInput;
        Create: {};
        Update: {};
        RelationName: "games";
        ListRelations: "games";
        Relations: {
            games: {
                Shape: Game[];
                Name: "Game";
                Nullable: false;
            };
        };
    };
    Like: {
        Name: "Like";
        Shape: Like;
        Include: Prisma.LikeInclude;
        Select: Prisma.LikeSelect;
        OrderBy: Prisma.LikeOrderByWithRelationInput;
        WhereUnique: Prisma.LikeWhereUniqueInput;
        Where: Prisma.LikeWhereInput;
        Create: {};
        Update: {};
        RelationName: "user" | "game";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
            game: {
                Shape: Game;
                Name: "Game";
                Nullable: false;
            };
        };
    };
    Rating: {
        Name: "Rating";
        Shape: Rating;
        Include: Prisma.RatingInclude;
        Select: Prisma.RatingSelect;
        OrderBy: Prisma.RatingOrderByWithRelationInput;
        WhereUnique: Prisma.RatingWhereUniqueInput;
        Where: Prisma.RatingWhereInput;
        Create: {};
        Update: {};
        RelationName: "game" | "user";
        ListRelations: never;
        Relations: {
            game: {
                Shape: Game;
                Name: "Game";
                Nullable: false;
            };
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
        };
    };
    Cart: {
        Name: "Cart";
        Shape: Cart;
        Include: Prisma.CartInclude;
        Select: Prisma.CartSelect;
        OrderBy: Prisma.CartOrderByWithRelationInput;
        WhereUnique: Prisma.CartWhereUniqueInput;
        Where: Prisma.CartWhereInput;
        Create: {};
        Update: {};
        RelationName: "user" | "items";
        ListRelations: "items";
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
            items: {
                Shape: CartItem[];
                Name: "CartItem";
                Nullable: false;
            };
        };
    };
    CartItem: {
        Name: "CartItem";
        Shape: CartItem;
        Include: Prisma.CartItemInclude;
        Select: Prisma.CartItemSelect;
        OrderBy: Prisma.CartItemOrderByWithRelationInput;
        WhereUnique: Prisma.CartItemWhereUniqueInput;
        Where: Prisma.CartItemWhereInput;
        Create: {};
        Update: {};
        RelationName: "cart" | "game";
        ListRelations: never;
        Relations: {
            cart: {
                Shape: Cart;
                Name: "Cart";
                Nullable: false;
            };
            game: {
                Shape: Game;
                Name: "Game";
                Nullable: false;
            };
        };
    };
    Order: {
        Name: "Order";
        Shape: Order;
        Include: Prisma.OrderInclude;
        Select: Prisma.OrderSelect;
        OrderBy: Prisma.OrderOrderByWithRelationInput;
        WhereUnique: Prisma.OrderWhereUniqueInput;
        Where: Prisma.OrderWhereInput;
        Create: {};
        Update: {};
        RelationName: "user" | "items" | "statusHistory";
        ListRelations: "items" | "statusHistory";
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
            items: {
                Shape: OrderItem[];
                Name: "OrderItem";
                Nullable: false;
            };
            statusHistory: {
                Shape: OrderStatusHistoryItem[];
                Name: "OrderStatusHistoryItem";
                Nullable: false;
            };
        };
    };
    OrderItem: {
        Name: "OrderItem";
        Shape: OrderItem;
        Include: Prisma.OrderItemInclude;
        Select: Prisma.OrderItemSelect;
        OrderBy: Prisma.OrderItemOrderByWithRelationInput;
        WhereUnique: Prisma.OrderItemWhereUniqueInput;
        Where: Prisma.OrderItemWhereInput;
        Create: {};
        Update: {};
        RelationName: "order" | "game";
        ListRelations: never;
        Relations: {
            order: {
                Shape: Order;
                Name: "Order";
                Nullable: false;
            };
            game: {
                Shape: Game;
                Name: "Game";
                Nullable: false;
            };
        };
    };
    OrderStatusHistoryItem: {
        Name: "OrderStatusHistoryItem";
        Shape: OrderStatusHistoryItem;
        Include: Prisma.OrderStatusHistoryItemInclude;
        Select: Prisma.OrderStatusHistoryItemSelect;
        OrderBy: Prisma.OrderStatusHistoryItemOrderByWithRelationInput;
        WhereUnique: Prisma.OrderStatusHistoryItemWhereUniqueInput;
        Where: Prisma.OrderStatusHistoryItemWhereInput;
        Create: {};
        Update: {};
        RelationName: "order";
        ListRelations: never;
        Relations: {
            order: {
                Shape: Order;
                Name: "Order";
                Nullable: false;
            };
        };
    };
}