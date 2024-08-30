import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Summit Health Patient Portal', () => {
  render(<App />);
  const linkElement = screen.getByText(/Summit Health Patient Portal/i);
  expect(linkElement).toBeInTheDocument();
});
