import { aliasQuery } from '../utils/graphql'

describe('Games Page', () => {
    beforeEach(() => {
        cy.visit('/games')

        cy.intercept({
            url: '/auth/token',
        }).as('getToken')

        cy.intercept('http://localhost:4000/graphql', (req) => {
            aliasQuery(req, 'GamesForHomePage')
        })

        cy.wait('@getToken')
        cy.wait('@GamesForHomePageQuery')
    })
    it('sort type select works correctly', () => {
        cy.getByTestId('sort-type-select').as('sortTypeSelect')

        cy.get('@sortTypeSelect').should('have.value', 'asc')
        cy.get('@sortTypeSelect').select('desc').should('have.value', 'desc')
    })
    it('filter form works correctly', () => {
        cy.getByTestId('age-limit-select').as('ageLimitSelect')
        cy.getByTestId('apply-filters-button').as('applyFiltersButton')

        cy.get('@ageLimitSelect').select('6').should('have.value', '6')
        cy.get('@applyFiltersButton').click()

        cy.wait('@GamesForHomePageQuery').then(({ request, response }) => {
            expect(request.body.variables.input.where.ageLimit).to.eq(6)

            const games = response?.body?.data?.gameConnection?.nodes ?? []

            if (!games?.length) {
                cy.getByTestId('games-not-found-title').should('be.visible')
            } else {
                games.forEach((game: any) => {
                    expect(game.ageLimit).to.be.at.least(6)
                })
                cy.getByTestId('games-list').children().should('have.length', games.length)
            }
        })
    })
    it('search input works correctly', () => {
        cy.getByTestId('games-search-input').as('gamesSearchInput')
        cy.getByTestId('games-search-button').as('gamesSearchButton')

        cy.get('@gamesSearchInput').type('spider man')
        cy.get('@gamesSearchButton').click()

        cy.wait('@GamesForHomePageQuery').then(({ request, response }) => {
            expect(request.body.variables.input.where.name).to.eq('spider man')

            const games = response?.body?.data?.gameConnection?.nodes ?? []

            if (!games.length) {
                cy.getByTestId('games-not-found-title').should('be.visible')
            } else {
                games.forEach((game: any) => {
                    expect(game.name.toLowerCase()).to.contain('spider man')
                })
                cy.getByTestId('games-list').children().should('have.length', games.length)
            }
        })
    })
})
