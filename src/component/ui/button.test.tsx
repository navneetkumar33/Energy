import { render, screen } from "@testing-library/react";
import Button from "./button";

describe('Button Component',()=>{
    test('Button component rrender correctly',()=>{
        render(<Button label="Submit"/>)
        const buttonElement=screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument()
    })
})