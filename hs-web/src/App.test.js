import {act, render, screen} from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";

test("Includes Logo by Alt", () => {
    render(<BrowserRouter><App/></BrowserRouter>);
    const logo = screen.getByAltText("HyperSynesthesia Logo");
    expect(logo).toBeInTheDocument();
});

test("Theme toggle button changes content", () => {
    render(<BrowserRouter><App/></BrowserRouter>);
    const button = screen.getByRole("button", {name: "toggle theme button"});
    expect(button).toHaveTextContent(/dark/i)
    act(() => button.click())
    expect(button).toHaveTextContent(/light/i)
});

test("Includes copyright", () => {
    render(<BrowserRouter><App/></BrowserRouter>);
    const copyright = screen.getByText(/Copyright © Christopher Soderquist/i);
    expect(copyright).toBeInTheDocument();
});
