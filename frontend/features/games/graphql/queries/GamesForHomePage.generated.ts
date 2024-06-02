import * as Types from '../../../../graphql-generated/types';

import { gql } from '@apollo/client';
import { GameFragmentDoc } from '../fragments/GameFragments.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GamesForHomePageQueryVariables = Types.Exact<{
  input: Types.GameConnectionInput;
}>;


export type GamesForHomePageQuery = { __typename?: 'Query', gameConnection: { __typename?: 'GameConnectionResponse', totalCount: number, hasMore: boolean, nodes: Array<{ __typename?: 'Game', id: string, name: string, ageLimit: number, description: string, isLiked: boolean, genre: string, price: number, platform: Array<Types.GamePlatform>, aggregate: { __typename?: 'GameAggregate', rating?: number | null, likes: number }, image: { __typename?: 'Resource', id: string, url: string } }> } };


export const GamesForHomePageDocument = gql`
    query GamesForHomePage($input: GameConnectionInput!) {
  gameConnection(input: $input) {
    totalCount
    hasMore
    nodes {
      ...Game
    }
  }
}
    ${GameFragmentDoc}`;

/**
 * __useGamesForHomePageQuery__
 *
 * To run a query within a React component, call `useGamesForHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGamesForHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGamesForHomePageQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGamesForHomePageQuery(baseOptions: Apollo.QueryHookOptions<GamesForHomePageQuery, GamesForHomePageQueryVariables> & ({ variables: GamesForHomePageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GamesForHomePageQuery, GamesForHomePageQueryVariables>(GamesForHomePageDocument, options);
      }
export function useGamesForHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GamesForHomePageQuery, GamesForHomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GamesForHomePageQuery, GamesForHomePageQueryVariables>(GamesForHomePageDocument, options);
        }
export function useGamesForHomePageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GamesForHomePageQuery, GamesForHomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GamesForHomePageQuery, GamesForHomePageQueryVariables>(GamesForHomePageDocument, options);
        }
export type GamesForHomePageQueryHookResult = ReturnType<typeof useGamesForHomePageQuery>;
export type GamesForHomePageLazyQueryHookResult = ReturnType<typeof useGamesForHomePageLazyQuery>;
export type GamesForHomePageSuspenseQueryHookResult = ReturnType<typeof useGamesForHomePageSuspenseQuery>;
export type GamesForHomePageQueryResult = Apollo.QueryResult<GamesForHomePageQuery, GamesForHomePageQueryVariables>;