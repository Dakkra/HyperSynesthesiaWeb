import {act, render, screen} from '@testing-library/react';
import App from './App';

test("Includes Logo by Alt", () => {
    render(<App/>);
    const logo = screen.getByAltText("HyperSynesthesia Logo");
    expect(logo).toBeInTheDocument();
});

test("Theme toggle button changes content", () => {
    render(<App/>);
    const button = screen.getByRole("button", {name: "toggle theme button"});
    expect(button).toHaveTextContent(/dark/i)
    act(() => button.click())
    expect(button).toHaveTextContent(/light/i)
});

test("Includes copyright", () => {
    render(<App/>)
    const copyright = screen.getByText(/Copyright © Christopher Soderquist/i);
    expect(copyright).toBeInTheDocument();
});
