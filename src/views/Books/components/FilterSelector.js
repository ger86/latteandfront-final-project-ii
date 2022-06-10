import styled from 'styled-components';

const Select = styled.select`
  height: 35px;
  padding-left: 1rem
  background: white;
  color: ${(props) => props.theme.fontColor.body};
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.colors.gray[300]};

  option {
    padding: 0px 2px 1px;
    min-height: 20px;
    background: white;
    color: black;
    white-space: pre;
  }
`;

function FilterSelector({elements, onChange, value}) {
  return (
    <form>
      <Select onChange={onChange} value={value}>
        <option value="">Todo</option>
        {elements.map((element) => (
          <option value={element.id} key={element.id}>
            {element.name}
          </option>
        ))}
      </Select>
    </form>
  );
}

export default FilterSelector;
