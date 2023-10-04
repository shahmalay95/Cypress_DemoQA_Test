describe("Alert Test", () => {
    it("should click 'Click me' button, submit the alert after waiting for 5 seconds", () => {
      // Step 1: Visit the website
      cy.visit("https://demoqa.com/alerts");
  
      // Step 2: Wait for 5 seconds
      cy.wait(5000)
  
      // Step 3: Click on the first 'Click me' button
      cy.get("#alertButton").click()
  
      // Step 4: Submit the alert
      cy.on("window:alert", (str) => {
        expect(str).to.equal("You clicked a button")
      })
    })
  })
  