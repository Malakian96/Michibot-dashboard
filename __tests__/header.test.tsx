import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Header from '../src/components/Header';

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn(),
}));

describe('Header', () => {
  it('renders correctly when not signed in', () => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: 'unauthenticated',
    });

    const { getByText } = render(<Header />);
    expect(getByText('Michibot')).toBeInTheDocument();
    expect(getByText('Sign In')).toBeInTheDocument();
  });

  it('renders correctly when signed in', () => {
    (useSession as jest.Mock).mockReturnValue({
      data: {
        user: {
          name: 'John Doe',
          email: 'john@example.com',
          image: 'https://example.com/avatar.jpg',
        },
      },
      status: 'authenticated',
    });

    const { getByText, getByAltText } = render(<Header />);
    expect(getByText('Michibot')).toBeInTheDocument();
    expect(getByAltText('User avatar')).toBeInTheDocument();
    expect(getByText('Sign Out')).toBeInTheDocument();
  });

  it('calls signIn when Sign In button is clicked', () => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: 'unauthenticated',
    });

    const { getByText } = render(<Header />);
    fireEvent.click(getByText('Sign In'));
    expect(signIn).toHaveBeenCalledWith('discord');
  });

  it('calls signOut when Sign Out button is clicked', () => {
    (useSession as jest.Mock).mockReturnValue({
      data: {
        user: {
          name: 'John Doe',
          email: 'john@example.com',
          image: 'https://example.com/avatar.jpg',
        },
      },
      status: 'authenticated',
    });

    const { getByText } = render(<Header />);
    fireEvent.click(getByText('Sign Out'));
    expect(signOut).toHaveBeenCalled();
  });
});

describe('HeaderSnapshot', () => {
  it('matches snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
