import { DEFAULT_VISIBLE_GAMES_COUNT } from '../constants'
import { useAppDispatch } from '../hooks/hooks'
import { incVisibleGamesCount } from '../slices/gamesSlice'

export const useGetIncVisibleGamesCount = () => {
    const dispatch = useAppDispatch()

    return () => dispatch(incVisibleGamesCount(DEFAULT_VISIBLE_GAMES_COUNT))
}
