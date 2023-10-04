describe("Radio Button Test", () => {
    it("should select 'Yes' from radio buttons after waiting for 5 seconds", () => {
      // Step 1: Visit the website
      cy.visit("https://demoqa.com/radio-button")
  
      // Step 2: Wait for 5 seconds
      cy.wait(5000);
  
      // Step 3: Select 'Yes' from radio buttons
      cy.get("#yesRadio").click({force:true})

      // Additional assertions if needed
      // For example, you can assert that the 'Yes' radio button is checked after clicking it
      cy.get("#yesRadio").should("be.checked")
    })
  })
  