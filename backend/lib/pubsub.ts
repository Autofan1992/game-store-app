import { createPubSub } from 'graphql-yoga';
import { Comment } from '@prisma/client'

export enum MutationType {
    CREATED = 'CREATED',
    UPDATED = 'UPDATED',
    DELETED = 'DELETED',
}

export interface PubSubEvent {

}

export interface PubSubCommentEvent extends PubSubEvent {
    comment: Comment;
}

export interface PuSubEvents
    extends Record<string, [number | string, PubSubEvent] | [PubSubEvent]> {
    comment: [number | string, PubSubCommentEvent];
    comments: [PubSubCommentEvent];
}

export const pubsub = createPubSub<PuSubEvents>({});