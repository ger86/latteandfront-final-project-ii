import styled from 'styled-components';

export const Form = styled.form`
  display: inline-block;
  padding: 2rem;
  border: 1px solid ${(props) => props.theme.shape.borderColor};
  border-radius: ${(props) => props.theme.shape.borderRadius};
`;
