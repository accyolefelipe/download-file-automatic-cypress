require('cypress-downloadfile/lib/downloadFileCommand');
require('cy-verify-downloads').addCustomCommand();

Cypress.Commands.add('form_request', (method, url, formData, done) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
        done(xhr);
    };
    xhr.onerror = function () {
        done(xhr);
    };
    xhr.send(formData);
});

Cypress.Commands.add('baixarPlanilha', () => {
    cy.downloadFile('https://www.gov.br/anp/pt-br/assuntos/precos-e-defesa-da-concorrencia/precos/precos-revenda-e-de-distribuicao-combustiveis/shlp/semanal/semanal-municipios-2022.xlsx',
            'cypress/fixtures', 'semanal-municipios-2022.xlsx');
})