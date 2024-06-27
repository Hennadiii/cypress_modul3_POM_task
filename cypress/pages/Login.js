export class Login {
    navigate() {
    cy.visit("https://www.edu.goit.global/account/login")};

    logining(email, password){
        cy.get('#user_email').type(email);
        cy.get('#user_password').type(password)};

    typeSubmit() {
        cy.get("[type='submit']").click();
    }   
}