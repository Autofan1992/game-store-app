import { RootStateType } from '../store'
import { AgesLimit, GamesGenres, GamesPlatforms, GamesSortCriteria, SortTypes } from '../../types/game-card-types'
import { createSelector } from '@reduxjs/toolkit'

export const selectNewestGames = (state: RootStateType) => state.gamesPage.games.slice(0, 3)
export const selectAllGames = (state: RootStateType) => state.gamesPage.games
export const selectGamesFilters = (state: RootStateType) => state.gamesPage.filters
export const selectGamesSearchName = (state: RootStateType) => state.gamesPage.searchName

export const selectVisibleGames = createSelector(
    [selectAllGames, selectGamesSearchName, selectGamesFilters],
    (games, name, { ageLimit, genres, sortCriteria, sortType, gamePlatforms }) => {
        let availableGames = games

        if (name) {
            availableGames = availableGames.filter(game => game.name.toLowerCase().includes(name.toLowerCase()))
        }

        if (gamePlatforms !== GamesPlatforms.All) {
            availableGames = availableGames.filter(game => game.platform[gamePlatforms])
        }

        if (ageLimit !== AgesLimit.All) {
            availableGames = availableGames.filter(game => game.ageLimit >= ageLimit)
        }

        if (genres.length > 0) {
            availableGames = availableGames.filter(game => genres.includes(game.genre as GamesGenres))
        }

        if (sortType === SortTypes.Descending) {
            if (sortCriteria === GamesSortCriteria.Name) {
                availableGames = [...availableGames].sort((a, b) => (a.name > b.name) ? 1 : -1)
            }
            if (sortCriteria === GamesSortCriteria.Rating) {
                availableGames = [...availableGames].sort((a, b) => a.rating - b.rating).reverse()
            }
        }

        if (sortType === SortTypes.Ascending) {
            if (sortCriteria === GamesSortCriteria.Name) {
                availableGames = [...availableGames].sort((a, b) => (a.name > b.name) ? 1 : -1).reverse()
            }
            if (sortCriteria === GamesSortCriteria.Rating) {
                availableGames = [...availableGames].sort((a, b) => a.rating - b.rating)
            }
        }

        return availableGames
    }
)

