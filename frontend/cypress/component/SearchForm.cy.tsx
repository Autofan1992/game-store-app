import {
    AppRouterContext,
    AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime'
import SearchGamesForm from '../../features/games/components/SearchGamesForm/SearchGamesForm'

describe('SearchForm.cy.tsx', () => {
    beforeEach(() => {
        const mockRouter = {
            push: cy.stub(),
            replace: cy.stub(),
            back: cy.stub(),
            forward: cy.stub(),
            prefetch: cy.stub(),
            refresh: cy.stub(),
        } satisfies AppRouterInstance

        cy.mount(
            <AppRouterContext.Provider value={mockRouter}>
                <SearchGamesForm />
            </AppRouterContext.Provider>,
        )
    })
    it('clear input button works correctly', () => {
        cy.getByTestId('games-search-input').as('gamesSearchInput')

        cy.get('@gamesSearchInput').type('spider man')
        cy.get('@gamesSearchInput').should('have.value', 'spider man')

        cy.getByTestId('games-search-clear-button').as('gamesSearchClearButton')

        cy.get('@gamesSearchClearButton').click()
        cy.get('@gamesSearchInput').should('have.value', '')
    })
})
