import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    screen.getByText(/checkout form/i)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/First Name:/i)
    fireEvent.change(firstNameInput, {target: {value: "Sean"}})

    const lastNameInput = screen.getByLabelText(/Last Name:/i)
    fireEvent.change(lastNameInput, {target: {value: "Shadle"}})

    const addressInput = screen.getByLabelText(/Address:/i)
    fireEvent.change(addressInput, {target: {value: "42 Wallaby Way"}})

    const cityInput = screen.getByLabelText(/City:/i)
    fireEvent.change(cityInput, {target: {value: "Fayetteville"}})

    const stateInput = screen.getByLabelText(/State:/i)
    fireEvent.change(stateInput, {target: {value: "Arkansas"}})

    const zipInput = screen.getByLabelText(/Zip:/i)
    fireEvent.change(zipInput, {target: {value: "72703"}})

    const submitButton = screen.getByRole("button", /Checkout/i)
    fireEvent.click(submitButton)

    expect(screen.getByText(/Sean/i)).toBeInTheDocument()
    expect(screen.getByText(/Shadle/i)).toBeInTheDocument()
    expect(screen.getByText(/42 Wallaby Way/i)).toBeInTheDocument()
    expect(screen.getByText(/Fayetteville/i)).toBeInTheDocument()
    expect(screen.getByText(/Arkansas/i)).toBeInTheDocument()
    expect(screen.getByText(/72703/i)).toBeInTheDocument()
});
