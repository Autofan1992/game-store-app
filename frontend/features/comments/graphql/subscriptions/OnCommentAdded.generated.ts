import * as Types from '../../../../graphql-generated/types';

import { gql } from '@apollo/client';
import { CommentFragmentDoc } from '../fragments/Comment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type OnCommentAddedSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type OnCommentAddedSubscription = { __typename?: 'Subscription', commentAdded: { __typename?: 'Comment', id: string, text: string, createdAt: string, updatedAt: string, isEditable: boolean, isEdited: boolean, user: { __typename?: 'User', id: string, avatar?: string | null, email: string } } };


export const OnCommentAddedDocument = gql`
    subscription OnCommentAdded {
  commentAdded {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useOnCommentAddedSubscription__
 *
 * To run a query within a React component, call `useOnCommentAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCommentAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCommentAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnCommentAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCommentAddedSubscription, OnCommentAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnCommentAddedSubscription, OnCommentAddedSubscriptionVariables>(OnCommentAddedDocument, options);
      }
export type OnCommentAddedSubscriptionHookResult = ReturnType<typeof useOnCommentAddedSubscription>;
export type OnCommentAddedSubscriptionResult = Apollo.SubscriptionResult<OnCommentAddedSubscription>;