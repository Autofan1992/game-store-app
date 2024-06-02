import { GamePlatform, GameSortCriteria, OrderBy } from '../../../graphql-generated/types'
import useSearchParams from '../../../hooks/useSearchParams'
import { GameFragment } from '../graphql/fragments/GameFragments.generated'
import { GamesForHomePageQueryVariables, useGamesForHomePageQuery } from '../graphql/queries/GamesForHomePage.generated'

const useGetGamesForGamesPage = (): {
    games: GameFragment[],
    totalCount: number,
    hasMore: boolean,
    fetchMore: () => void,
    loading: boolean
} => {
    const [{ gamePlatforms, ageLimit, genres, sortCriteria, sortType, search }] = useSearchParams()

    const variables: GamesForHomePageQueryVariables = {
        input: {
            pagination: {
                take: 10
            },
            where: {
                genres: genres?.split(','),
                platforms: gamePlatforms?.split(',') as GamePlatform[],
                ageLimit: ageLimit ? +ageLimit : undefined,
                sortCriteria: sortCriteria as GameSortCriteria,
                name: search,
                orderBy: sortType as OrderBy
            }
        }
    }
    const query = useGamesForHomePageQuery({
        variables,
    })

    const games = query.data?.gameConnection?.nodes || []
    const hasMore = query.data?.gameConnection?.hasMore || false

    const fetchMore = () => {
        if (hasMore) {
            query.fetchMore({
                variables: {
                    input: {
                        ...variables.input,
                        pagination: {
                            ...variables.input?.pagination,
                            skip: games.length,
                        }
                    }
                }
            })
        }
    }

    return {
        games,
        totalCount: query.data?.gameConnection?.totalCount || 0,
        hasMore,
        fetchMore,
        loading: query.loading,
    }
}

export default useGetGamesForGamesPage