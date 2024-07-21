import { createPubSub } from 'graphql-yoga';
import { Comment } from '../src/generated/prisma-client'

export enum MutationType {
    CREATED = 'CREATED',
    UPDATED = 'UPDATED',
    DELETED = 'DELETED',
}

export interface PubSubCommentEvent {
    comment: Comment;
}

export interface PuSubEvents
    extends Record<string, [number | string, object] | [object]> {
    comment: [number | string, PubSubCommentEvent];
    comments: [PubSubCommentEvent];
}

export const pubsub = createPubSub<PuSubEvents>({});