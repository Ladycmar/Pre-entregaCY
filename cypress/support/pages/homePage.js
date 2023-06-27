export class HomePage {
   
    clickOnlineShopButton() {
        cy.contains('Online Shop', {timeout:30000}).click();
    };
};