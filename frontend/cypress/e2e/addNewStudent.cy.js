describe("Add New Student Component Test", () => {
  it("should add a new student successfully", () => {
    cy.visit("http://localhost:3000/add-student");
    cy.get('[data-testid="first-name"]').type("John");
    cy.get('[data-testid="last-name"]').type("Doe");
    cy.get('[data-testid="email"]').type("johndoe@example.com");
    cy.get('[data-testid="college"]').type("Harvard");
    cy.get('[data-testid="percentage"]').type("95");
    cy.get('[data-testid="active-student"]').check();
    cy.get('[data-testid="submit-button"]').click();
  });
});
