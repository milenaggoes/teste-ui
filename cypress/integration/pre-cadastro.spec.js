/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta/') 
    });

    it('Deve completar o pré cadastro com sucesso', () => {    
        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()
        let email = faker.internet.email(firstName)

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(firstName)
        cy.get('#account_last_name').type(lastName)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    });

    it('Deve completar o pré-cadastro com sucesso - Usando Comandos customizados' , () => {

        let email2 = faker.internet.email(firstName)
        cy.preCadastro(email2, 'senha!@#forte','Milena', 'Goes')
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    });
});