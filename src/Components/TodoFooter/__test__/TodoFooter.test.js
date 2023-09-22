import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { TodoFooter } from "../TodoFooter";

const MockTodoFooter = ({ numberOfincompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter 
            numberOfincompleteTasks={numberOfincompleteTasks} />
        </BrowserRouter>
    );
}

it('render the correct amont of incomplete tasks', async () => {
    render(
        <MockTodoFooter
            numberOfincompleteTasks={5}
        />
    );
    const paragraphElement = screen.getByText("5 tasks left");
    expect(paragraphElement).toBeInTheDocument();
})