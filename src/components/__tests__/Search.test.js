import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import MOCK_DATA from './mocks/resListMock.json';
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
});

it("should Search resList for Burger text input", async () => {
    await act(async () => render(<BrowserRouter><Provider store={appStore}><Body /></Provider></BrowserRouter>))

    const searchBtn = screen.getByRole("button", { name: "Search" })
    // expect(searchBtn).toBeInTheDocument

    const searchInput = screen.getByTestId("searchInput")
    fireEvent.change(searchInput, { target: { value: "Burger" } })
    console.log(searchInput)
    fireEvent.click(searchBtn)
    const resCardLength = screen.getAllByTestId("resCard").length;
    expect(resCardLength).toBe(1)
})