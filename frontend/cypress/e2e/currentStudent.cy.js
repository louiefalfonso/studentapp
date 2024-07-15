

describe("Current Student Details Component Test", () => {
  it("should display the current student details", () => {

    const studentId = 2;

    // Assuming the URL structure for updating a specific student
    cy.visit(`http://localhost:3000/student/${studentId}`);

    cy.get("h2").should("contain", "Student Details");
    cy.get("table").should("exist");

    cy.get("th").should("contain", "Student Id");
    cy.get("th").should("contain", "First Name");
    cy.get("th").should("contain", "Last Name");
    cy.get("th").should("contain", "Email");
    cy.get("th").should("contain", "College");
    cy.get("th").should("contain", "Percentage");
    cy.get("th").should("contain", "Active Student");

    cy.get("td").eq(0).should("contain", "2");
    cy.get("td").eq(1).should("contain", "Barbie Jane");
    cy.get("td").eq(2).should("contain", "Davis");
    cy.get("td").eq(3).should("contain", "barbiedavis@ucl.co.uk");
    cy.get("td").eq(4).should("contain", "Marketing");
    cy.get("td").eq(5).should("contain", "87.92");
    cy.get("td").eq(6).should("contain", "Yes");

  }); 
});
  
  