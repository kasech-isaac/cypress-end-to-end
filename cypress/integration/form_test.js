// describe or context is a methode(""). It is something we use in every single testing. It's coming from cyprus. it's not js.
describe("This our first test", ()=>{
it("Should return true", ()=>{
    expect(true).to.equal(true)
})
})

describe("Testing our form input", ()=>{
    beforeEach(function(){
        // runs before each page test in this block
        cy.visit("http://localhost:3000/")  
    })
    it("Finds the Name input", ()=> {
    // we use this three A everytime we do a test
    // Arrange= Get element
// cy.pause();
    cy.get('[for="name"] > input')
    // could also write nabe get 
    // ('input[name="name"]')

     // Act= Mimic User Interaction
     .type("Kasech Isaac is awsome")
     // Assert= Test/ Verify
     .should("have.value", "Kasech Isaac is awsome")
     .clear();
     cy.contains("Name is a required field.")

    //  box check
     cy.get('input[type="checkbox"]').check().should("be.checked")

     cy.get('form').submit("Must Submite")
    })
    })


