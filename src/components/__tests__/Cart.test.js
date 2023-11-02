import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import MOCK_DATA from './mocks/resMenuMock.json'
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

it("should load restaurant menu component", async () => {
    await act(async () => render(<BrowserRouter><Provider store={appStore}><RestaurantMenu /></Provider></BrowserRouter>))

    const accordionHeader = screen.getByText("Recommended (17)")
    fireEvent.click(accordionHeader)

    const menuItem = screen.getAllByTestId("menuItem")

    expect(menuItem.length).toBe(17)

})