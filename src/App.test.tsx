import { screen } from "@testing-library/react"

test("renders learn react link", () => {
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})
