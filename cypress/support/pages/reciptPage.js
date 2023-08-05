export class ReciptPage {
    verificarNombreyApellido(nombre,apellido) {
        cy.contains(nombre);
        cy.contains(apellido);
    };
    verificarProducto(productos) {
        cy.contains(productos);
    };
    verificarTarjeta(tarjeta) {
        cy.get('#creditCard').contains(tarjeta);
    };
    verificarPrecioAcumulProdus(precioprodu1,precioprodu2) {
        cy.contains(precioprodu1,precioprodu2);
    };
}