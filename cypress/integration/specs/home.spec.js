
import homePage from '../pageObjects/homePage'

const hp = new homePage()

describe('Home page tests', () => {

    beforeEach(() => {
        // open the home page
        hp.visit();

        //assert the page has loaded
        hp.getTitle().should('contain', 'The home of property')
    })

    it('search for Auckland', () => {

        // call search function
        hp.search('Auckland');

        // assert the url
        const expectedRelativeUrl = Cypress.env().expectedRelativeUrlMap.Auckland;

        cy.url().should('contain', expectedRelativeUrl);

    })

    it('search for Petone', () => {

        // call search function
        hp.search('Petone');

        // assert the url
        const expectedRelativeUrl = Cypress.env().expectedRelativeUrlMap.Petone;
        cy.url().should('contain', expectedRelativeUrl);

    })

    it('search for 45 Puru Crescent and verify it is on top of the list', () => {

        const searchAddress = '45 Puru Crescent';

        // call search function
        hp.search(searchAddress);

        // assert the url
        const expectedRelativeUrl = Cypress.env().expectedRelativeUrlMap.PuruCresent45;
        cy.url().should('contain', expectedRelativeUrl);

        // assert the result is on top of the list
        hp.getSearchResults().first().find('h2').should('contain', searchAddress);
    })

})