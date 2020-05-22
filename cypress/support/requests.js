// GET
Cypress.Commands.add('PostSegurancaExterna', () => {
  cy.request({
    method: "POST",
    url: "/seguranca/externa",
    body: {
      "senha": "teste1",
      "usuario": "luiz.souto"
    }
  })
})


// POST

// DELETE

// PUT