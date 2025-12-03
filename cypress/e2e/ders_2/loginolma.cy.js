import { loginPage } from '../pages/Login';
import { homePage } from '../pages/HomePage';

describe('POP Login Logout Testleri', () => {

    it('user888 login logout yapar', () => {
        loginPage.visit();
        loginPage.login('user888@gmail.com', '1234567890');

        cy.wait(3000);

        homePage.openMenu();
        homePage.logout();
    });

    it('testowyqa login logout yapar', () => {
        loginPage.visit();
        loginPage.login('testowyqa@qa.team', 'QA!automation-1');

        cy.wait(3000);

        homePage.openMenu();
        homePage.logout();
    });

});
