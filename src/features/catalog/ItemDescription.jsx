import styled from 'styled-components';
import Price from '../../ui/Price';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  border-radius: 5px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1rem 1.2rem;
`;

function ItemDescription({ item }) {
  const { image, name, price, discountPrice } = item;
  return (
    <Container>
      <div>
        <Image src={image} />
      </div>
      <Description>
        <p>{name}</p>
        <Price
          price={price}
          discountPrice={discountPrice}
        />
      </Description>
    </Container>
  );
}

export default ItemDescription;
