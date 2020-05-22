describe(
  'Login de segurança externa', () => {
    it("Garantir o contrato do retorno de segurança externa"), ()=>{
      cy.PostSegurancaExterna().should((response)=>{
        expect(response.status).to.eq(100);
      })
    }
})