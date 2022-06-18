import styled from 'styled-components';

export default styled.select`
  width: ${(props) => props.width ?? 'auto'};
  height: ${(props) => props.height ?? 'auto'};
  padding-left: 1rem
  border: 1px solid ${(props) => props.theme.colors.gray[300]};
  background: white;
  color: ${(props) => props.theme.fontColor.body};
  font-size: 14px;

  option {
    padding: 0px 2px 1px;
    min-height: 20px;
    color: black;
    white-space: pre;
  }
`;
