import * as Types from '../../../../graphql-generated/types';

import { gql } from '@apollo/client';
export type CommentFragment = { __typename?: 'Comment', id: string, text: string, createdAt: string, updatedAt: string, isEditable: boolean, isEdited: boolean, user: { __typename?: 'User', id: string, avatar?: string | null, email: string } };

export type UserForCommentFragment = { __typename?: 'User', id: string, avatar?: string | null, email: string };

export const UserForCommentFragmentDoc = gql`
    fragment UserForComment on User {
  id
  avatar
  email
}
    `;
export const CommentFragmentDoc = gql`
    fragment Comment on Comment {
  id
  text
  createdAt
  updatedAt
  isEditable
  isEdited
  user {
    ...UserForComment
  }
}
    ${UserForCommentFragmentDoc}`;