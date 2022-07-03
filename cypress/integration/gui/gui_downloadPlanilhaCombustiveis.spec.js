/// <reference types="Cypress" />

describe('Planilha de preços de combustiveis', () => {
    it('baixar planilha por municipio', () => {
        cy.downloadFile('https://www.gov.br/anp/pt-br/assuntos/precos-e-defesa-da-concorrencia/precos/precos-revenda-e-de-distribuicao-combustiveis/shlp/semanal/semanal-municipios-2022.xlsx',
            'cypress/downloads', 'semanal-municipios-2022.xlsx');
        cy.verifyDownload('semanal-municipios-2022.xlsx');
    });
});