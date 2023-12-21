import Header from './HeaderWithProps';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('HeaderWithProps Component', () => {
  it('should return login button if isLoggedIn props is false', () => {
    render(<Header isLoggedIn={false} />);

    const loginButton = screen.getByRole('button', { name: 'Login' });

    expect(loginButton.innerHTML).equal('Login');
  });

  it('should return logout button if isLoggedIn props is true', () => {
    render(<Header isLoggedIn={true} />);

    const logoutButton = screen.getByRole('button', { name: 'Logout' });

    expect(logoutButton.innerHTML).equal('Logout');
  });
});
