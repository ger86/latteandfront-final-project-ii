import styled from 'styled-components';
import ResponsiveImage from './ResponsiveImage';

const CardWrapper = styled.div`
  display: block;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.gray[300]};
`;

const CardInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-wrap: no-wrap;
  }
`;

const ImageWrapper = styled.div`
  flex: 0 0 300px;
  max-width: 300px;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-right: 2rem;
  }
`;

const Title = styled.h3`
  a {
    color: ${(props) => props.theme.fontColor.body};
    text-decoration: none;
  }
`;

function Card({image = null, title, description = null, footer: Footer}) {
  return (
    <CardWrapper>
      <CardInner>
        {image && (
          <ImageWrapper>
            <ResponsiveImage src={image} alt={title} />
          </ImageWrapper>
        )}
        <div>
          <Title>{title}</Title>
          {description && <div>{description}</div>}
          {Footer && <Footer />}
        </div>
      </CardInner>
    </CardWrapper>
  );
}

export default Card;
