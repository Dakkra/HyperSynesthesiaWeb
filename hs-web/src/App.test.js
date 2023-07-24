import { render, screen } from '@testing-library/react';
import App from './App';

test('Includes Logo', () => {
  render(<App />);
  const logo = screen.getByAltText("HyperSynesthesia Logo");
  expect(logo).toBeInTheDocument();
});
