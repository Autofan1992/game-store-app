import * as Types from '../../../../graphql-generated/types';

import { gql } from '@apollo/client';
import { CommentFragmentDoc } from '../fragments/Comment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateCommentForGamePageMutationVariables = Types.Exact<{
  input: Types.CreateCommentInput;
}>;


export type CreateCommentForGamePageMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: string, text: string, createdAt: string, updatedAt: string, isEditable: boolean, isEdited: boolean, user: { __typename?: 'User', id: string, avatar?: string | null, email: string } } };


export const CreateCommentForGamePageDocument = gql`
    mutation CreateCommentForGamePage($input: CreateCommentInput!) {
  createComment(input: $input) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;
export type CreateCommentForGamePageMutationFn = Apollo.MutationFunction<CreateCommentForGamePageMutation, CreateCommentForGamePageMutationVariables>;

/**
 * __useCreateCommentForGamePageMutation__
 *
 * To run a mutation, you first call `useCreateCommentForGamePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentForGamePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentForGamePageMutation, { data, loading, error }] = useCreateCommentForGamePageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCommentForGamePageMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentForGamePageMutation, CreateCommentForGamePageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentForGamePageMutation, CreateCommentForGamePageMutationVariables>(CreateCommentForGamePageDocument, options);
      }
export type CreateCommentForGamePageMutationHookResult = ReturnType<typeof useCreateCommentForGamePageMutation>;
export type CreateCommentForGamePageMutationResult = Apollo.MutationResult<CreateCommentForGamePageMutation>;
export type CreateCommentForGamePageMutationOptions = Apollo.BaseMutationOptions<CreateCommentForGamePageMutation, CreateCommentForGamePageMutationVariables>;