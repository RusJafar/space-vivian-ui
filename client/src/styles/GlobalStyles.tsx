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
    line-height: 7vh;
    color: ${theme.colors.primary}
  }

  button {
    cursor: pointer;
    border: none;
    transition: ${theme.transitions.default};
  }

  input {
    all: unset;
    height: 5vh;
    border-radius: 10px;
    background: ${theme.colors.primaryLight};
  }

  textarea {
    all: unset;
    border-radius: 10px;
    background: ${theme.colors.primaryLight};
  }

  label {
    color: ${theme.colors.primary}
  }

  p {
    color: ${theme.colors.white}
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

export const ButtonGrayStyled = styled.button`
    color: ${theme.colors.primary};
    background: ${theme.colors.gray};
    border-color: red;
    border: solid 1px;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    max-width: 300px;
    min-width: 100px;
    width: 100%;

`;

export const ButtonPrimaryStyled = styled.button`
    color: ${theme.colors.gray};
    background: ${theme.colors.primary};
    border-color: ${theme.colors.gray};
    border: solid 1px;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    max-width: 300px;
    min-width: 100px;
    width: 100%;

`;

export const PageWrapStyled = styled.div`
padding-bottom: 20px;
background: ${theme.colors.gray};

@media(max-width: 768px) {
  padding-bottom: 14vh;
}
`

export default GlobalStyles;