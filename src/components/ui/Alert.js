import styled from 'styled-components';

export const Alert = styled.div`
  padding: 1rem;
  border-width: 1px;
  border-style: solid;
`;

export const AlertError = styled(Alert)`
  background-color: #f8d7da;
  border-color: #f5c2c7;
  color: #842029;
`;

export const AlertSuccess = styled(Alert)`
  background-color: #d1e7dd;
  border-color: #badbcc;
  color: #0f5132;
`;
