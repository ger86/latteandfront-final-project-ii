import styled from 'styled-components';

const Star = styled.span`
  height: 4rem;
  margin-right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  appearance: none;
  outline: 0;
}
`;

function Stars({stars}) {
  const array = [...Array(stars).keys()];
  return (
    <div>
      {array.map((v) => (
        <Star key={v} role="img" aria-label="star">
          ⭐
        </Star>
      ))}
    </div>
  );
}

export default Stars;
