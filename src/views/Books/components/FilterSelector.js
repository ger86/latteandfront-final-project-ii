function FilterSelector({elements, onChange, value}) {
  return (
    <form>
      <select onChange={onChange} value={value}>
        <option value="">Todo</option>
        {elements.map((element) => (
          <option value={element.id} key={element.id}>
            {element.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default FilterSelector;
