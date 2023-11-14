import { render, screen } from '@testing-library/react';
import MainLayout from 'view/MainLayout';

test('renders learn react link', () => {
  render(<MainLayout />);
  const navigation = screen.getByText(/login/i);
  expect(navigation).toBeInTheDocument();
});
