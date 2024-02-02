import styled from 'styled-components';
import { convertCurrency } from '../../services/convertCurrency';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.5rem 0.5rem;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 500;

  & span {
    color: var(--color-grey-500);
    font-size: 0.8rem;
    text-decoration: line-through;
  }
`;

const Name = styled.div`
  font-size: 0.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
function ItemDescription({ item }) {
  return (
    <Container>
      <Price>
        {item.discountPrice
          ? convertCurrency(item.discountPrice)
          : convertCurrency(item.price)}
        <span>{item.discountPrice && convertCurrency(item.price)}</span>
      </Price>
      <Name>{item.name}</Name>
    </Container>
  );
}

export default ItemDescription;
