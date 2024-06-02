import * as Types from '../../../../graphql-generated/types';

import { gql } from '@apollo/client';
import { GameFragmentDoc } from '../fragments/GameFragments.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PatchGameMutationVariables = Types.Exact<{
  input: Types.PatchGameInput;
}>;


export type PatchGameMutation = { __typename?: 'Mutation', patchGame: { __typename?: 'Game', id: string, name: string, ageLimit: number, description: string, isLiked: boolean, genre: string, price: number, platform: Array<Types.GamePlatform>, aggregate: { __typename?: 'GameAggregate', rating?: number | null, likes: number }, image: { __typename?: 'Resource', id: string, url: string } } };


export const PatchGameDocument = gql`
    mutation PatchGame($input: PatchGameInput!) {
  patchGame(input: $input) {
    ...Game
  }
}
    ${GameFragmentDoc}`;
export type PatchGameMutationFn = Apollo.MutationFunction<PatchGameMutation, PatchGameMutationVariables>;

/**
 * __usePatchGameMutation__
 *
 * To run a mutation, you first call `usePatchGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchGameMutation, { data, loading, error }] = usePatchGameMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePatchGameMutation(baseOptions?: Apollo.MutationHookOptions<PatchGameMutation, PatchGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PatchGameMutation, PatchGameMutationVariables>(PatchGameDocument, options);
      }
export type PatchGameMutationHookResult = ReturnType<typeof usePatchGameMutation>;
export type PatchGameMutationResult = Apollo.MutationResult<PatchGameMutation>;
export type PatchGameMutationOptions = Apollo.BaseMutationOptions<PatchGameMutation, PatchGameMutationVariables>;