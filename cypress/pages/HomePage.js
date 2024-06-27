export class HomePage {
     openNavigationMenu() {
        cy.get('#open-navigation-menu-mobile').click();
    }

    logout() {
        cy.contains('button', 'Log out')
            .scrollIntoView()
            .should('be.visible')
            .click()
        };
}