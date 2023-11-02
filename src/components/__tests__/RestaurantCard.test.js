import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from './mocks/resCardMock.json'
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom"

it("should render RestaurantCard component with Props data", () => {
    render(<BrowserRouter>
        <RestaurantCard restaurantData={MOCK_DATA} />
    </BrowserRouter>)

    const name = screen.getByText("Meraki")

    expect(name).toBeInTheDocument()
})