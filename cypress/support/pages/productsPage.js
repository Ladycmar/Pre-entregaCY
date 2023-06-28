export class ProductsPage {
    constructor() {
        this.cerrarModalProd = '#closeModal';
    };
        agregarProducto(productos) {
        cy.get(`[value="${productos}"]`).click({force:true});
        cy.get(this.cerrarModalProd).click();
    };
        clickGoShoppingButton() {
        cy.xpath('//button[text()="Go to shopping cart"]').click();
    };
};