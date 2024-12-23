import React from 'react';
import { render } from '@testing-library/react';
import DiscordInvite from '../src/components/DiscordInvite';

describe('DiscordInvite', () => {
  it('renders the heading correctly', () => {
    const { getByText } = render(<DiscordInvite />);
    expect(getByText('Michibot')).toBeInTheDocument();
  });

  it('renders the description correctly', () => {
    const { getByText } = render(<DiscordInvite />);
    expect(
      getByText(
        'Añade a Michibot a tu servidor de Discord y accede a todas sus funcionalidades.',
      ),
    ).toBeInTheDocument();
  });

  it('renders the permissions list correctly', () => {
    const { getByText } = render(<DiscordInvite />);
    expect(getByText('Añadir un bot a un servidor')).toBeInTheDocument();
    expect(getByText('Crear comandos')).toBeInTheDocument();
    expect(getByText('Tener una crisis existencial')).toBeInTheDocument();
  });

  it('renders the invite link correctly', () => {
    const inviteLink =
      'https://discord.com/oauth2/authorize?client_id=1303130781580918954&permissions=8&integration_type=0&scope=bot';
    const { getByRole } = render(<DiscordInvite />);
    expect(getByRole('link')).toHaveAttribute('href', inviteLink);
  });
});

describe('DiscordInviteSnapshot', () => {
  it('matches snapshot', () => {
    const { container } = render(<DiscordInvite />);
    expect(container).toMatchSnapshot();
  });
});
