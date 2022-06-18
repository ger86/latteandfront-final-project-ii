import styled from 'styled-components';
import create1toNArray from 'utils/create1toNArray';

const Button = styled.button`
  padding: 1rem;
  font-size: 1.5rem;
  height: 4rem;
  background: none;
  border: none;
  appearance: none;
  outline: 0;
}
`;

function StarsInput({onChange, value, max = 5}) {
  const currentStars = create1toNArray(value);
  const emptyStars = create1toNArray(max - value);

  if (value > max) {
    throw new Error(`Value <${value}> cannot be greater thant max <${max}>`);
  }

  function onClick(event, value) {
    event.preventDefault();
    onChange(value);
  }

  return (
    <div>
      {currentStars.map((v, index) => (
        <Button key={v} onClick={(event) => onClick(event, index + 1)}>
          <span role="img" aria-label="star">
            ⭐
          </span>
        </Button>
      ))}
      {emptyStars.map((v, index) => (
        <Button key={v} onClick={(event) => onClick(event, index + 1 + value)}>
          <span role="img" aria-label="empty star">
            ☆
          </span>
        </Button>
      ))}
    </div>
  );
}

export default StarsInput;
