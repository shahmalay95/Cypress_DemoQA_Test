// Test suite for the "Browser Window Buttons"
describe('Browser Window Buttons', () => {

  // This hook runs before each test in the suite.
  // We're visiting the target URL before each test starts.
  beforeEach(() => {
      cy.visit('https://demoqa.com/browser-windows');
  });

  // Test case to verify the functionality of the "New Tab" button
  it('should open a new tab when "New Tab" button is clicked', () => {
      // Access the current window object and stub the 'open' method.
      // This allows us to intercept calls to window.open.
      cy.window().then(win => {
          cy.stub(win, 'open').as('windowOpen');
      });

      // Click on the "New Tab" button
      cy.get('#tabButton').click();

      // Assert that the 'open' method was called (indicating a new tab/window attempt)
      cy.get('@windowOpen').should('be.called');
  });

  // Test case to verify the functionality of the "New Window" button
  it('should open a new window when "New Window" button is clicked', () => {
      // Again, stubbing the 'open' method of the window object
      cy.window().then(win => {
          cy.stub(win, 'open').as('windowOpen');
      });

      // Click on the "New Window" button
      cy.get('#windowButton').click();

      // Assert that the 'open' method was called
      cy.get('@windowOpen').should('be.called');
  });

  // Test case to verify the functionality of the "New Window Message" button
  it('should open a new window with a message when "New Window Message" button is clicked', () => {
      // Stubbing the 'open' method once more
      cy.window().then(win => {
          cy.stub(win, 'open').as('windowOpen');
      });

      // Click on the "New Window Message" button
      cy.get('#messageWindowButton').click();

      // Assert that the 'open' method was called
      cy.get('@windowOpen').should('be.called');
  });
});
