/// <reference types="Cypress" />

class homePage {

    visit() {
        cy.visit('/');
    }

    getTitle() {
        return cy.get('.titleSearchContainer > h1.ng-star-inserted');
    }

    search(value) {
        cy.get('#autocomplete-search').clear().type(value);
        cy.get('div.addressResults').find('.addressResult').first().click();
    }

    getSearchResults() {
        return cy.get('homes-property-tile-drawer-search-cards');
    }
}

export default homePage
    