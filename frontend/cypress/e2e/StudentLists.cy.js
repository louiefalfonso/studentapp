describe("Students Table List", () => {
  it("displays a list of students", () => {
    cy.visit("http://localhost:3000/");
    cy.get("tr").eq(2).within(() => {
        cy.get("td").eq(0).should("contain", "2");
        cy.get("td").eq(1).should("contain", "Barbie Jane");
        cy.get("td").eq(2).should("contain", "Davis");
        cy.get("td").eq(3).should("contain", "barbiedavis@ucl.co.uk");
        cy.get("td").eq(4).should("contain", "Marketing");
        cy.get("td").eq(5).should("contain", "87.92");
        cy.get("td").eq(6).should("contain", "Yes");
      });
  });
});
