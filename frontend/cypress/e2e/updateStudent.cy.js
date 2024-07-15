describe("Update Student Component Test", () => {
  it("should update a student successfully", () => {

    const studentId = 20;
    // Assuming the URL structure for updating a specific student
    cy.visit(`http://localhost:3000/update-student/${studentId}`);

    // Fill in the form fields
    cy.get('[data-testid="first-name"]').clear().type("Pamela Anne");
    cy.get('[data-testid="last-name"]').clear().type("Daniels");
    cy.get('[data-testid="email"]').clear().type("pameladaniels@ucl.co.uk");
    cy.get('[data-testid="college"]').clear().type("Marketing");
    cy.get('[data-testid="percentage"]').clear().type("87.23");
    cy.get('[data-testid="active-student"]').uncheck(); // Assuming this is a checkbox

    // Submit the form
    cy.get('[data-testid="submit-button"]').click();
  });
});
