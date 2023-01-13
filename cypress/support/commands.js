// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginThroughApi', ({ username, password }) => {
  let cookies;
  cy.request('GET', '/account/').then((response) => {
    let parser = new DOMParser();
    const parsedHTML = parser.parseFromString(response.body, 'text/html');
    const targetElement = parsedHTML.querySelector('#woocommerce-login-nonce');
    const value = targetElement.getAttribute('value');
    cy.request({
      method: 'POST',
      url: '/account/',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: {
        username: username,
        password: password,
        'woocommerce-login-nonce': value,
        login: ' Log in',
      },
    }).then((response) => {
      const headerResponse = response.allRequestResponses;
      cookies = headerResponse[0]['Response Headers']['set-cookie'];
      cookies.forEach((cookie) => {
        cy.getCookie(cookie);
      });
    });
  });
  return cookies;
});

Cypress.Commands.add('addProductToCartThroughApi', ({ cookies, productId, quantity }) => {
  cy.request({
    method: 'POST',
    url: '/?wc-ajax=add_to_cart',
    headers: {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      cookie: cookies,
    },
    body: {
      product_id: productId,
      quantity: quantity,
    },
  });
});
