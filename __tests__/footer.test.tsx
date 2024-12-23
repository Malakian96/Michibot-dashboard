import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../src/components/Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Footer />);
    expect(
      getByText('© 2024 Michibot. All rights reserved.'),
    ).toBeInTheDocument();
  });
});

describe('FooterSnapshot', () => {
  it('matches snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
