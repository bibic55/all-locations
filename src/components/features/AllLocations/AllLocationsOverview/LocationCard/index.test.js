import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import format from 'date-fns/format';
import LocationCard from '.';

const mockLocation = {
  id: '1',
  createdAt: '2021-03-05T09:10:35.462Z',
  name: 'McGlynnview',
  userCount: 6221,
  description: 'Investment Account',
};

const mockNumberOfViews = 3;

jest.mock('../../../../../hooks/useUserViews', () => ({
  useUserViews: () => ({ views: { [mockLocation.id]: mockNumberOfViews } }),
}));

test('Card is rendered', () => {
  render(<LocationCard location={mockLocation} />);

  const locationComponent = screen.getByTestId('locationCard');

  expect(locationComponent).toBeInTheDocument();
});

test('Card tittle is correct from mockLocation', () => {
  render(<LocationCard location={mockLocation} />);

  const locationComponentTitle = screen.getByText(mockLocation.name);

  expect(locationComponentTitle).toBeInTheDocument();
});

test('expect number of views to be 3 on the card', () => {
  render(<LocationCard location={mockLocation} />);

  const locationComponentViews = screen.getByTestId('locationCardViews');

  expect(locationComponentViews.textContent).toEqual(mockNumberOfViews.toString());
});

test('expect number of users to be correct from mockLocation', () => {
  render(<LocationCard location={mockLocation} />);

  const locationComponentUsers = screen.getByText(`${mockLocation.userCount} users`);

  expect(locationComponentUsers).toBeInTheDocument();
});

test('expect time to be correct from mockLocation', () => {
  render(<LocationCard location={mockLocation} />);

  const mockTime = format(new Date(mockLocation.createdAt), 'K:mm aaa (zzzz)');

  const locationComponentTimeZone = screen.getByText(mockTime);

  expect(locationComponentTimeZone).toBeInTheDocument();
});

test('render hover icon on hover', () => {
  render(<LocationCard location={mockLocation} />);

  const locationComponent = screen.getByTestId('locationCard');
  fireEvent.mouseOver(locationComponent);

  const hoverComponent = screen.getByTestId('locationCardHoverIcon');

  expect(hoverComponent).toBeInTheDocument();
});
