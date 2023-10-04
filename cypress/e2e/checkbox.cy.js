describe("Checkbox Test", () => {
    it("should select the Home checkbox after waiting for 5 seconds", () => {
      // Step 1: Visit the website
      cy.visit("https://demoqa.com/checkbox")
  
      // Step 2: Wait for 5 seconds
      cy.wait(5000)
  
      // Step 3: Select the Home checkbox
      cy.get("#tree-node > ol > li > span > label").contains("Home").click()
      
      // Capture the screenshot after clicking Home checkbox
      cy.screenshot("Checkbox Test");

    })
  })
  