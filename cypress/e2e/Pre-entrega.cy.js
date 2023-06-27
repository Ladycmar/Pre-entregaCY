import { LoginPage } from "../support/pages/Loginpage"
import { HomePage } from "../support/pages/homePage";
import { ProductsPage } from "../support/pages/productsPage";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";

describe('Pre-entrega-Lady Marín', () => {
  let data;
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const productsPage  = new ProductsPage ();
  const shoppingCartPage = new ShoppingCartPage();

  before('Before-Fixtures', () => {
    cy.fixture('data').then(datos => {
        data = datos;
    })
  });
beforeEach('BeforeEach-Precondiciones iniciar sesión e ingresar a "Online Shop"', () => {
    cy.visit('')
    cy.get('#registertoggle').dblclick();
    loginPage.escribirUsuario(data.datosLogin.usuario);
    loginPage.escribirContraseña(data.datosLogin.contraseña);
    loginPage.clickLoginBtn();
    homePage.clickOnlineShopButton();
  })
it('Elegir 2 productos y verificar el nombre y precio de cada uno y el acumulado', () => {
    productsPage.agregarProducto(data.productos.producto1);
    productsPage.agregarProducto(data.productos.producto2);
    cy.xpath('//button[text()="Go to shopping cart"]').click();
    shoppingCartPage.verificarProducto(data.productos.producto1);
    shoppingCartPage.verificarProducto(data.productos.producto2);
    shoppingCartPage.verificarPrecioProdu(data.productos.precioprodu1);
    shoppingCartPage.verificarPrecioProdu(data.productos.precioprodu2);
    cy.xpath('//button[text()="Show total price"]').click();
    cy.contains(data.productos.precioprodu1+data.productos.precioprodu2).should('exist');
  })
})