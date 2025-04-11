// GlobalStyles.js
import styled, { createGlobalStyle } from 'styled-components';
import theme from '../theme';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.primary};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.primary};
    transition: ${theme.transitions.default};
    
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 40px;
  }

  button {
    cursor: pointer;
    border: none;
    transition: ${theme.transitions.default};
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

export const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacing.medium} ${theme.spacing.large};
  border-radius: 8px;
  font-weight: 600;
  box-shadow: ${theme.shadows.soft};

  &:hover {
    background-color: ${theme.colors.secondary};
    box-shadow: ${theme.shadows.hover};
    animation: pulse 1.5s infinite;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default GlobalStyles;