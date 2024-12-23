import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RootLayout from '../src/app/layout';

describe('RootLayout', () => {
  it('renders children correctly', () => {
    render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>,
    );

    const childElement = screen.getByText('Test Child');
    expect(childElement).toBeInTheDocument();
  });
});

describe('RootLayoutSnapshot', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>,
    );
    expect(container).toMatchSnapshot();
  });
});
