/// <reference types="Cypress" />

describe('Planilha de preços de combustiveis', () => {
    it('baixar planilha por municipio', () => {
        cy.baixarPlanilha(); 
        cy.verifyDownload('semanal-municipios-2022.xlsx');
    });
});