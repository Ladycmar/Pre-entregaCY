export class LoginPage {

    escribirUsuario(usuario) {
        cy.get('#user').type(usuario);
    };

    escribirContraseña(contraseña) {
        cy.get('#pass').type(contraseña);
    };

    clickLoginBtn() {
        cy.get('#submitForm').click();
    };
}