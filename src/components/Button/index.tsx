import React, { ButtonHTMLAttributes } from 'react';

import { Oval } from 'react-loader-spinner';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  text_loading?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  text_loading,
  ...rest
}) => (
  <Container type="button" {...rest}>
    {loading ? (
      <>
        <Oval color="#FFF" height={24} width={24} />
        <p>{text_loading || 'Carregando...'}</p>
      </>
    ) : (
      children
    )}
  </Container>
);
