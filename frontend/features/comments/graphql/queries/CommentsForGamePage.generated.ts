import * as Types from '../../../../graphql-generated/types';

import { gql } from '@apollo/client';
import { CommentFragmentDoc } from '../fragments/Comment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CommentsForGamePageQueryVariables = Types.Exact<{
  input: Types.CommentConnectionInput;
}>;


export type CommentsForGamePageQuery = { __typename?: 'Query', commentConnection: { __typename?: 'CommentConnectionResponse', hasMore: boolean, totalCount: number, nodes: Array<{ __typename?: 'Comment', id: string, text: string, createdAt: string, updatedAt: string, isEditable: boolean, isEdited: boolean, user: { __typename?: 'User', id: string, avatar?: string | null, email: string } }> } };


export const CommentsForGamePageDocument = gql`
    query CommentsForGamePage($input: CommentConnectionInput!) {
  commentConnection(input: $input) {
    hasMore
    totalCount
    nodes {
      ...Comment
    }
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useCommentsForGamePageQuery__
 *
 * To run a query within a React component, call `useCommentsForGamePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsForGamePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsForGamePageQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCommentsForGamePageQuery(baseOptions: Apollo.QueryHookOptions<CommentsForGamePageQuery, CommentsForGamePageQueryVariables> & ({ variables: CommentsForGamePageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsForGamePageQuery, CommentsForGamePageQueryVariables>(CommentsForGamePageDocument, options);
      }
export function useCommentsForGamePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsForGamePageQuery, CommentsForGamePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsForGamePageQuery, CommentsForGamePageQueryVariables>(CommentsForGamePageDocument, options);
        }
export function useCommentsForGamePageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CommentsForGamePageQuery, CommentsForGamePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CommentsForGamePageQuery, CommentsForGamePageQueryVariables>(CommentsForGamePageDocument, options);
        }
export type CommentsForGamePageQueryHookResult = ReturnType<typeof useCommentsForGamePageQuery>;
export type CommentsForGamePageLazyQueryHookResult = ReturnType<typeof useCommentsForGamePageLazyQuery>;
export type CommentsForGamePageSuspenseQueryHookResult = ReturnType<typeof useCommentsForGamePageSuspenseQuery>;
export type CommentsForGamePageQueryResult = Apollo.QueryResult<CommentsForGamePageQuery, CommentsForGamePageQueryVariables>;