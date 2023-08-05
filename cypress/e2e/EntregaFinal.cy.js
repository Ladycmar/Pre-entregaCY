import { HomePage } from "../support/pages/homePage";
import { ProductsPage } from "../support/pages/productsPage";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";
import {CheckOutPage } from "../support/pages/checkOutPage";
import {ReciptPage } from "../support/pages/reciptPage";

describe('Entrega Final-Lady Marín', () => {
  let data;
  const homePage = new HomePage();
  const productsPage  = new ProductsPage ();
  const shoppingCartPage = new ShoppingCartPage();
  const checkOutPage = new CheckOutPage();
  const reciptPage = new ReciptPage();

  before('Before-Fixtures, precondiciones Registro, login de usuario Pushing IT', () => {
    cy.fixture('data').then(datos => {
        data = datos;
    cy.request({
            method: 'POST',
            url: 'https://pushing-it.onrender.com/api/register',
            body: {
                username : "Ladyc",
                password: "Lady123456!",
                gender: "Female",
                day: "16",
                month: "9",
                year: "1993"
            },
        }).then(respuesta => {
            expect(respuesta.status).is.equal(200)
        })
    cy.request({
            method: 'POST',
            url: 'https://pushing-it.onrender.com/api/login',
            body: {
                username : "Ladyc",
                password: "Lady123456!"
            },
        }).then(respuesta => {
            expect(respuesta.status).to.be.equal(200)
            window.localStorage.setItem('token', respuesta.body.token)
            window.localStorage.setItem('user', respuesta.body.user.username)
        })
    })
  });
it('En pushing it ingresar a "Online Shop", elegir 2 productos y verificarlos, completar el checkout y verificar todos los datos', () => {
    cy.visit('');
    homePage.clickOnlineShopButton();
    productsPage.agregarProducto(data.productos.producto1);
    productsPage.agregarProducto(data.productos.producto2);
    productsPage.clickGoShoppingButton();
    shoppingCartPage.verificarProducto(data.productos.producto1);
    shoppingCartPage.verificarProducto(data.productos.producto2);
    shoppingCartPage.verificarPrecioProdu(data.productos.producto1,data.productos.precioprodu1);
    shoppingCartPage.verificarPrecioProdu(data.productos.producto2,data.productos.precioprodu2);
    shoppingCartPage.clickShowTotalPriceButton();
    shoppingCartPage.verificarPrecioAcumulProdus(data.productos.precioprodu1+data.productos.precioprodu2);
    shoppingCartPage.clickCheckoutButton();
    checkOutPage.escribirNombre(data.checkoutdatos.nombre);
    checkOutPage.escribirApellido(data.checkoutdatos.apellido);
    checkOutPage.escribirNumeroTarjeta(data.checkoutdatos.tarjeta);
    checkOutPage.clickPurchaseButton();
    reciptPage.verificarNombreyApellido(data.checkoutdatos.nombre,data.checkoutdatos.apellido);
    reciptPage.verificarProducto(data.productos.producto1);
    reciptPage.verificarProducto(data.productos.producto2);
    reciptPage.verificarTarjeta(data.checkoutdatos.tarjeta);
    reciptPage.verificarPrecioAcumulProdus(data.productos.precioprodu1+data.productos.precioprodu2);
  })
 after('After-eliminación de usuario', () => {
    cy.request({
                method: 'DELETE',
                url: 'https://pushing-it.onrender.com/api/deleteuser/Ladyc',          
            }).then(respuesta => {
            expect(respuesta.status).is.equal(200)
            window.localStorage.setItem('token', respuesta.body.token)
            window.localStorage.setItem('user', respuesta.body.user.username)
        })
    })
})