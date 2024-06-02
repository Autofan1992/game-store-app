import * as Types from '../../../../graphql-generated/types';

import { gql } from '@apollo/client';
import { GameFragmentDoc } from '../fragments/GameFragments.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GameForGamePageQueryVariables = Types.Exact<{
  input: Types.GameInput;
}>;


export type GameForGamePageQuery = { __typename?: 'Query', game?: { __typename?: 'Game', id: string, name: string, ageLimit: number, description: string, isLiked: boolean, genre: string, price: number, platform: Array<Types.GamePlatform>, aggregate: { __typename?: 'GameAggregate', rating?: number | null, likes: number }, image: { __typename?: 'Resource', id: string, url: string } } | null };


export const GameForGamePageDocument = gql`
    query GameForGamePage($input: GameInput!) {
  game(input: $input) {
    ...Game
  }
}
    ${GameFragmentDoc}`;

/**
 * __useGameForGamePageQuery__
 *
 * To run a query within a React component, call `useGameForGamePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGameForGamePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGameForGamePageQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGameForGamePageQuery(baseOptions: Apollo.QueryHookOptions<GameForGamePageQuery, GameForGamePageQueryVariables> & ({ variables: GameForGamePageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GameForGamePageQuery, GameForGamePageQueryVariables>(GameForGamePageDocument, options);
      }
export function useGameForGamePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GameForGamePageQuery, GameForGamePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GameForGamePageQuery, GameForGamePageQueryVariables>(GameForGamePageDocument, options);
        }
export function useGameForGamePageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GameForGamePageQuery, GameForGamePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GameForGamePageQuery, GameForGamePageQueryVariables>(GameForGamePageDocument, options);
        }
export type GameForGamePageQueryHookResult = ReturnType<typeof useGameForGamePageQuery>;
export type GameForGamePageLazyQueryHookResult = ReturnType<typeof useGameForGamePageLazyQuery>;
export type GameForGamePageSuspenseQueryHookResult = ReturnType<typeof useGameForGamePageSuspenseQuery>;
export type GameForGamePageQueryResult = Apollo.QueryResult<GameForGamePageQuery, GameForGamePageQueryVariables>;