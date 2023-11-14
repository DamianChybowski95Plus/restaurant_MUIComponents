import { render, screen } from '@testing-library/react';
import FooterSection from 'components/sections/FooterSection';

test('About rendered', () => {
  render(<FooterSection />);
  const email = screen.getByText(/Little/i);
  expect(email).toBeInTheDocument();
});