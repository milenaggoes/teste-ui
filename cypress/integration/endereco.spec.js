/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados=>{
        cy.entrar(dados.usuario, dados.senha)
        });
    });

    it('Deve fazer cadastro de faturamento com sucessso', () => {
        EnderecoPage.editarEnderecoFaturamento('Milena','Goes','ABC','Brasil','Av das Flores','2023','São Paulo','São Paulo','08317150')

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});