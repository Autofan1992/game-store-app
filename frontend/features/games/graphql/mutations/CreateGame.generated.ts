import * as Types from '../../../../graphql-generated/types';

import { gql } from '@apollo/client';
import { GameFragmentDoc } from '../fragments/GameFragments.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateGameMutationVariables = Types.Exact<{
  input: Types.CreateGameInput;
}>;


export type CreateGameMutation = { __typename?: 'Mutation', createGame: { __typename?: 'Game', id: string, name: string, ageLimit: number, description: string, isLiked: boolean, genre: string, price: number, platform: Array<Types.GamePlatform>, aggregate: { __typename?: 'GameAggregate', rating?: number | null, likes: number }, image: { __typename?: 'Resource', id: string, url: string } } };


export const CreateGameDocument = gql`
    mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
    ...Game
  }
}
    ${GameFragmentDoc}`;
export type CreateGameMutationFn = Apollo.MutationFunction<CreateGameMutation, CreateGameMutationVariables>;

/**
 * __useCreateGameMutation__
 *
 * To run a mutation, you first call `useCreateGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGameMutation, { data, loading, error }] = useCreateGameMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateGameMutation(baseOptions?: Apollo.MutationHookOptions<CreateGameMutation, CreateGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGameMutation, CreateGameMutationVariables>(CreateGameDocument, options);
      }
export type CreateGameMutationHookResult = ReturnType<typeof useCreateGameMutation>;
export type CreateGameMutationResult = Apollo.MutationResult<CreateGameMutation>;
export type CreateGameMutationOptions = Apollo.BaseMutationOptions<CreateGameMutation, CreateGameMutationVariables>;