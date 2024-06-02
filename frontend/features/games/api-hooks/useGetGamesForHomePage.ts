import { GameFragment } from '../graphql/fragments/GameFragments.generated'
import {  useGamesForHomePageQuery } from '../graphql/queries/GamesForHomePage.generated'

const useGetGamesForHomePage = (): [games: GameFragment[], query: ReturnType<typeof useGamesForHomePageQuery>] => {
    const query = useGamesForHomePageQuery({
        variables: {
            input: {
                pagination: {
                    take: 3
                }
            }
        },
    })

    return [query.data?.gameConnection.nodes ?? [], query]
}

export default useGetGamesForHomePage