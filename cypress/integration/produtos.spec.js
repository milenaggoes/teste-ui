/// <reference types = "cypress"/>

describe('Funcionalidade Página de Produtos', () => {
    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
    });
    it.only('Deve adicionar um produto ao carrinho', () => {
        var qtd = 3

        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()

        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtd)

    });

    it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Abominable Hoodie', 'XL', 'Red', 1)
    });

    it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 3)
    });
});