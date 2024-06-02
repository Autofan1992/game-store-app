import * as Types from '../../../../graphql-generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DeleteCommentForGamePageMutationVariables = Types.Exact<{
  input: Types.DeleteCommentInput;
}>;


export type DeleteCommentForGamePageMutation = { __typename?: 'Mutation', deleteComment: { __typename?: 'Comment', id: string } };


export const DeleteCommentForGamePageDocument = gql`
    mutation DeleteCommentForGamePage($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
  }
}
    `;
export type DeleteCommentForGamePageMutationFn = Apollo.MutationFunction<DeleteCommentForGamePageMutation, DeleteCommentForGamePageMutationVariables>;

/**
 * __useDeleteCommentForGamePageMutation__
 *
 * To run a mutation, you first call `useDeleteCommentForGamePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentForGamePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentForGamePageMutation, { data, loading, error }] = useDeleteCommentForGamePageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCommentForGamePageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentForGamePageMutation, DeleteCommentForGamePageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentForGamePageMutation, DeleteCommentForGamePageMutationVariables>(DeleteCommentForGamePageDocument, options);
      }
export type DeleteCommentForGamePageMutationHookResult = ReturnType<typeof useDeleteCommentForGamePageMutation>;
export type DeleteCommentForGamePageMutationResult = Apollo.MutationResult<DeleteCommentForGamePageMutation>;
export type DeleteCommentForGamePageMutationOptions = Apollo.BaseMutationOptions<DeleteCommentForGamePageMutation, DeleteCommentForGamePageMutationVariables>;