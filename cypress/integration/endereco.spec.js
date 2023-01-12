/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

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

    it.only('Deve fazer cadastro de faturamento com sucessso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep
            )

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});