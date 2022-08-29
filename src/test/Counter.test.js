import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../main/Counter";

test("Counter increments and decrements when the buttons are clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: /Increment/i });
    const decrementButton = screen.getByRole("button", { name: /Decrement/i });
    const count = screen.getByRole("alert");
    expect(count).toHaveTextContent("0");
    userEvent.click(incrementButton);
    expect(count).toHaveTextContent("1");
    userEvent.click(decrementButton);
    expect(count).toHaveTextContent("0");
    });
