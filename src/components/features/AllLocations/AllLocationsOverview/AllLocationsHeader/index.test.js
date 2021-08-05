import React from 'react';
import { render, screen } from '@testing-library/react';
import AllLocationsHeader from '.';

test('render all locations page header with correct content', () => {
  render(<AllLocationsHeader />);

  const header = screen.getByTestId('allLocations__header');
  const title = screen.getByText('Acme locations');
  const subTitle = screen.getByText('All locations');

  expect(header).toBeInTheDocument();
  expect(header).toContainElement(title);
  expect(header).toContainElement(subTitle);
});
