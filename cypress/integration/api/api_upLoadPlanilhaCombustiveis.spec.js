/// <reference types="Cypress" />
describe('Testing the API', function () {
    beforeEach(() => cy.baixarPlanilha());
     
    it('Receives valid FormData and proccesses the information correctly', function () {
        const fileName = 'semanal-municipios-2022.xlsx';
        const method = 'POST';
        const url = 'http://localhost:8080/upload';
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        const expectedAnswer = '{"msg":"X elements from the excel where successfully imported"}';
  
        // Get file from fixtures as binary
        cy.fixture(fileName, 'binary').then( (excelBin) => {
  
            // File in binary format gets converted to blob so it can be sent as Form data
            const blob = Cypress.Blob.binaryStringToBlob(excelBin, fileType);
                // Build up the form
                const formData = new FormData();
                formData.set('file', blob, fileName); //adding a file to the form
                // formData.set('input2', inputContent2); //adding a plain input to the form
                
                // Perform the request
                cy.form_request(method, url, formData, function (response) {
                    expect(response.status).to.eq(200);
                    expect(expectedAnswer).to.eq(response.response);
                });
                
        })
        
    })
  
  })