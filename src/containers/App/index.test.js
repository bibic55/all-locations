import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

test('renders app container', () => {
  render(<App />);

  const appContainer = screen.getByRole('application');
  expect(appContainer).toBeInTheDocument();
});
