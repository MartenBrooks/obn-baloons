import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.1rem 0.2rem;
`;
function Item({ item }) {
  return (
    <Container>
      <img
        src={item.image}
        alt={item.name}
      />
    </Container>
  );
}

export default Item;
