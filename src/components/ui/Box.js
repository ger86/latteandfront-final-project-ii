import styled from 'styled-components';

export default styled.div`
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}rem` : 0)};
  margin-bottom: ${(props) => (props.marginBottom ? `${props.marginBottom}rem` : 0)};
  margin-right: ${(props) => (props.marginRight ? `${props.marginRight}rem` : 0)};
`;
