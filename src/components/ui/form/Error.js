import styled from 'styled-components';

export default styled.div`
  padding: 1.5rem;
  margin-top: ${(props) => (props.mt ? `${props.mt}rem` : 0)};
  background-color: ${(props) => props.theme.colors.red.light};
  color: white;
`;
