class HomePage {

    burgerMenu() {
        return cy.get('#open-navigation-menu-mobile');
    }

    logoutButton() {
        return cy.contains('Log out');
    }

    openMenu() {
        this.burgerMenu().click();
    }

    logout() {
        this.logoutButton().click();
    }
}

export const homePage = new HomePage();
