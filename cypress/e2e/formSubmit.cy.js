import 'cypress-file-upload';
describe('Form Submission', () => {

    it('Form Submission', () => {
        cy.viewport(2140, 1200)
        cy.visit("https://demoqa.com/automation-practice-form")
        // Step 2: Wait for 5 seconds
        cy.wait(5000)

        // Step 3: Fill out First Name, Last Name, and Email
        cy.get('#firstName').type('John')
        cy.get('#lastName').type('Doe')
        cy.get('#userEmail').type('johndoe@example.com')

        // Step 4: Select Gender
        cy.get('#genterWrapper').contains('Male').click()

        // Step 5: Input phone number (10 digits)
        cy.get('#userNumber').type('1234567890')

        // Step 6: Input subject 'English'
        cy.get('#subjectsInput').type('English').type('{enter}')

        // Step 7: Select Sports as a subject
        cy.get('#hobbiesWrapper').contains('Sports').click()

        // Step 8: Upload a photo
        const fileName = 'sample.jpeg' // Replace with your file name
        cy.get('#uploadPicture').attachFile(fileName)

        // Step 9: Input address 'Canada'
        cy.get('#currentAddress').type('Canada')

        // Step 10: Select state as 'NCR'
        cy.get('#state').click()
        cy.get('#react-select-3-option-0').click()

        cy.wait(2000)
        // Step 11: Select city as 'Delhi'
        cy.get('#city').click()
        cy.get('#react-select-4-option-0').click()

        // Step 12: Click on Submit button
        cy.get('#submit').click()
        
        // Capture the screenshot of the form after clicking submit button
        cy.screenshot("Form Submission");

    })

})