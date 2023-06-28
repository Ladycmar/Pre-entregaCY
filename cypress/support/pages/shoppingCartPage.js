export class ShoppingCartPage {
   
    verificarProducto(productos) {
        cy.contains(productos).should('exist');
    };
    verificarPrecioProdu(productos,productPrice) {
        cy.contains(productos).siblings(productPrice).should('exist');
    };
    clickShowTotalPriceButton() {
        cy.xpath('//button[text()="Show total price"]').click();
    };
    verificarPrecioAcumulProdus(precioprodu1,precioprodu2) {
        cy.contains(precioprodu1,precioprodu2).should('exist');
    };
};