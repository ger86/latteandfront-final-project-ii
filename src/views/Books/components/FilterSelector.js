import Select from 'components/ui/form/Select';

function FilterSelector({elements, onChange, value}) {
  return (
    <form>
      <Select height="35px" onChange={onChange} value={value}>
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
