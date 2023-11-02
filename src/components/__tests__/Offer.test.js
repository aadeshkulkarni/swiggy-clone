import { render, screen } from "@testing-library/react"
import Offer from "../Offer"
import "@testing-library/jest-dom"

describe("Offer page tests",()=>{

        // Helper functions
        beforeAll(()=>{
            console.log("Before All")    
        })
        beforeEach(()=>{
            console.log("Before Each")
        })
        afterAll(()=>{
            console.log("After All")    
        })
        afterEach(()=>{
            console.log("After Each")
        })
        
    test("Should load Offer component",()=>{
        render(<Offer/>);
    
        const heading = screen.getByRole("heading");
        
        // Assertion
        expect(heading).toBeInTheDocument()
    })
    
    test("Should load button inside Offer component",()=>{
        render(<Offer/>)
    
        const button = screen.getByText("Submit")
    
        expect(button).toBeInTheDocument()
    })
    
    test("Should load input name in Offer component",()=>{
        render(<Offer/>)
        const inputName = screen.getByPlaceholderText("name")
        expect(inputName).toBeInTheDocument()
    })
    
    test("Should load 2 input boxes in Offer component",()=>{
        render(<Offer/>)
        const inputBoxes = screen.getAllByRole("textbox")
        expect(inputBoxes.length).toBe(2)
    })
})
