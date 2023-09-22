import {render, screen} from "@testing-library/react";
import Header from "./Header";

test('render link', ()=> {
    render(<Header title={"My Header"} />);
    const linkElement = screen.getByText("My Header");
    expect(linkElement).toBeInTheDocument();
});

it('should render same text passed into title prop', async () => {
    render(<Header title={"My Header"} />);
    const headingElement = screen.getByRole("heading", {name: "Josh"});
    expect(headingElement).toBeInTheDocument();
})

it('should render same text passed into title prop', async () => {
    render(<Header title={"My Header"} />);
    const headingElement = await screen.findByText(/josh/i);
    expect(headingElement).toBeInTheDocument();
})

it('should render same text passed into title prop', async () => {
    render(<Header title={"My Header"} />);
    const headingElement = screen.getByText(/josh/i);
    expect(headingElement).toBeInTheDocument();
})