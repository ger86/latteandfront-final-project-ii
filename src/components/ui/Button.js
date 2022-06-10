import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: ${(props) => props.theme.fontSize.body};
  transition: background-color 0.2s linear, color 0.2s linear;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.button.primary.normal.backgroundColor};
  border-color: ${(props) => props.theme.button.primary.normal.borderColor};
  color: ${(props) => props.theme.button.primary.normal.text};

  &:hover {
    background-color: ${(props) => props.theme.button.primary.hover.backgroundColor};
    border-color: ${(props) => props.theme.button.primary.hover.borderColor};
    color: ${(props) => props.theme.button.primary.hover.text};
  }
  &:focus {
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => props.theme.button.primary.active.backgroundColor};
    border-color: ${(props) => props.theme.button.primary.active.borderColor};
    color: ${(props) => props.theme.button.primary.active.text};
  }

  &:disabled {
    background-color: ${(props) => props.theme.button.primary.disabled.backgroundColor};
    border-color: ${(props) => props.theme.button.primary.disabled.borderColor};
    color: ${(props) => props.theme.button.primary.disabled.text};
  }
`;

export const DangerButton = styled(Button)`
  background-color: ${(props) => props.theme.button.primary.normal.backgroundColor};
  border-color: ${(props) => props.theme.button.primary.normal.borderColor};
  color: ${(props) => props.theme.button.primary.normal.text};

  &:hover {
    background-color: ${(props) => props.theme.button.primary.hover.backgroundColor};
    border-color: ${(props) => props.theme.button.primary.hover.borderColor};
    color: ${(props) => props.theme.button.primary.hover.text};
  }
  &:focus {
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => props.theme.button.primary.active.backgroundColor};
    border-color: ${(props) => props.theme.button.primary.active.borderColor};
    color: ${(props) => props.theme.button.primary.active.text};
  }

  &:disabled {
    background-color: ${(props) => props.theme.button.primary.disabled.backgroundColor};
    border-color: ${(props) => props.theme.button.primary.disabled.borderColor};
    color: ${(props) => props.theme.button.primary.disabled.text};
  }
`;
