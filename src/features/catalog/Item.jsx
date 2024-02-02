import styled from 'styled-components';
import ItemDescription from './ItemDescription';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 7rem;
  font-size: 1rem;
  background-color: var(--color-grey-100);
  padding: 0.1rem 0.2rem;
  border-radius: 5px;
`;
const Image = styled.img`
  border-radius: 5px;
`;
function Item({ item }) {
  return (
    <Container>
      <Image src={item.image} alt={item.name} />
      <ItemDescription item={item} />
    </Container>
  );
}

export default Item;
