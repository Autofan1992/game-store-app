
import { NullableType } from '../../../types/helpers'
import { GameFragment } from '../graphql/fragments/GameFragments.generated'
import { useGameForGamePageQuery } from '../graphql/queries/GameForGamePage.generated'

const useGetGameForGamePage = (id: string): [game: NullableType<GameFragment>, query: ReturnType<typeof useGameForGamePageQuery>] => {
    const query = useGameForGamePageQuery({
        variables: {
            input: {
                id
            }
        },
    })

    return [query.data?.game, query]
}

export default useGetGameForGamePage