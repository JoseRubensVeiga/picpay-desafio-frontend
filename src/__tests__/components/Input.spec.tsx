import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import { Input } from '../../components/Input';

jest.mock('@unform/core', () => {
  return {
    useField: () => ({
      fieldName: '',
      defaultValue: '',
      error: '',
      registerField: jest.fn(),
      clearError: jest.fn(),
    }),
  };
});

describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });

  it('should be render highlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle('border-color: #007dfe;');
      expect(containerElement).toHaveStyle('color: #007dfe;');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).not.toHaveStyle('border-color: #007dfe;');
      expect(containerElement).not.toHaveStyle('color: #007dfe;');
    });
  });
});
