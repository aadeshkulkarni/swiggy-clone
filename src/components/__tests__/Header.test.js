import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'

it("should render Header component with a login button", () => {
    render(<BrowserRouter><Provider store={appStore}><Header /></Provider></BrowserRouter>)
    // const loginButton = screen.getByRole("button")
    const loginButton = screen.getByText("Login")
    // Assertion
    expect(loginButton).toBeInTheDocument();
})

it("should render Header component with Card items 0", () => {
    render(<BrowserRouter><Provider store={appStore}><Header /></Provider></BrowserRouter>)
    const cartButton = screen.getByText("Cart (0 items)")
    // Assertion
    expect(cartButton).toBeInTheDocument();
})

it("should change login button to logout on click", () => {
    render(<BrowserRouter><Provider store={appStore}><Header /></Provider></BrowserRouter>)
    const loginButton = screen.getByRole("button", { name: "Login" })
    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", { name: "Logout" })
    // Assertion
    expect(logoutButton).toBeInTheDocument();
})