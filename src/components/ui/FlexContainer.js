import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: ${(props) => props.alignItems ?? 'center'};
  justify-content: ${(props) => props.justifyContent ?? 'flex-start'};
  min-height: ${(props) => props.minHeight ?? 'auto'};
  margin-top: ${(props) => props.marginTop ?? '0'};
  margin-bottom: ${(props) => props.marginBottom ?? '0'};
  & > * {
    margin-right: ${(props) => (props.withGutter ? '1rem' : '0')};
  }
`;
