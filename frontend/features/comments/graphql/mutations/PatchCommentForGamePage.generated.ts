import * as Types from '../../../../graphql-generated/types';

import { gql } from '@apollo/client';
import { CommentFragmentDoc } from '../fragments/Comment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PatchCommentForGamePageMutationVariables = Types.Exact<{
  input: Types.PatchCommentInput;
}>;


export type PatchCommentForGamePageMutation = { __typename?: 'Mutation', patchComment: { __typename?: 'Comment', id: string, text: string, createdAt: string, updatedAt: string, isEditable: boolean, isEdited: boolean, user: { __typename?: 'User', id: string, avatar?: string | null, email: string } } };


export const PatchCommentForGamePageDocument = gql`
    mutation PatchCommentForGamePage($input: PatchCommentInput!) {
  patchComment(input: $input) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;
export type PatchCommentForGamePageMutationFn = Apollo.MutationFunction<PatchCommentForGamePageMutation, PatchCommentForGamePageMutationVariables>;

/**
 * __usePatchCommentForGamePageMutation__
 *
 * To run a mutation, you first call `usePatchCommentForGamePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchCommentForGamePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchCommentForGamePageMutation, { data, loading, error }] = usePatchCommentForGamePageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePatchCommentForGamePageMutation(baseOptions?: Apollo.MutationHookOptions<PatchCommentForGamePageMutation, PatchCommentForGamePageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PatchCommentForGamePageMutation, PatchCommentForGamePageMutationVariables>(PatchCommentForGamePageDocument, options);
      }
export type PatchCommentForGamePageMutationHookResult = ReturnType<typeof usePatchCommentForGamePageMutation>;
export type PatchCommentForGamePageMutationResult = Apollo.MutationResult<PatchCommentForGamePageMutation>;
export type PatchCommentForGamePageMutationOptions = Apollo.BaseMutationOptions<PatchCommentForGamePageMutation, PatchCommentForGamePageMutationVariables>;