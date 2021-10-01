import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the employees details screen', () => {
  render(<App />);
  expect(screen.getByText(/Employees Details/i)).toBeInTheDocument();
});