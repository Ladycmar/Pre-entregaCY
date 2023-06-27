export class ShoppingCartPage {
   
    verificarProducto(productos) {
        cy.contains(productos).should('exist');
    };

    verificarPrecioProdu(productos,productPrice) {
        cy.contains(productos).siblings(productPrice).should('exist');
    };
};