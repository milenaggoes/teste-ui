/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados=>{
            cy.login(dados.usuario, dados.senha)
        });
    });

    it('Deve fazer cadastro de faturamento com sucessso', () => {
        EnderecoPage.editarEnderecoFaturamento()
    });
});