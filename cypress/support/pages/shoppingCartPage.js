export class ShoppingCartPage {
   
    verificarProducto(productos) {
        cy.contains(productos);
    };
    verificarPrecioProdu(productos,productPrice) {
        cy.contains(productos).siblings(productPrice);
    };
    clickShowTotalPriceButton() {
        cy.xpath('//button[text()="Show total price"]').click();
    };
    verificarPrecioAcumulProdus(precioprodu1,precioprodu2) {
        cy.contains(precioprodu1,precioprodu2);
    };
    clickCheckoutButton() {
            cy.contains('Go to Checkout', {timeout:30000}).click();
    };
};