import { render, screen } from '@testing-library/react';
import App from '../App';

// This test checks if the main App component renders without crashing.
// Does not check for functionality.
test('renders the main App component without crashing', () => {
  render(<App />);
});