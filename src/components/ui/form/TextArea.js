import styled from 'styled-components';

export default styled.textarea`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: ${(props) => props.theme.fontSize.body};
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => props.theme.fontColor.body};
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid ${(props) => props.theme.shape.borderColor};
  appearance: none;
  border-radius: ${(props) => props.theme.shape.bordeRadius};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
