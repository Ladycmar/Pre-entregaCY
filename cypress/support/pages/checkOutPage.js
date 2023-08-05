export class CheckOutPage {
    
    escribirNombre(nombre) {
        cy.get('#FirstName').type(nombre);
    };
    escribirApellido(apellido) {
        cy.get('#lastName').type(apellido);
    };
    escribirNumeroTarjeta(tarjeta) {
        cy.get('#cardNumber').type(tarjeta);
    };
    clickPurchaseButton() {
        cy.xpath('//button[text()="Purchase"]').click();
        cy.wait(9000);
    };
}