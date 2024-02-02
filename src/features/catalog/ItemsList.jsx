import styled from 'styled-components';
import { useItems } from '../../contexts/ItemsContext';
import Item from './Item';

const StyledItemsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
function ItemsList() {
  const { items, isLoading } = useItems();
  if (isLoading) return <div>Loading</div>;
  if (items.length === 0) return <div>No items</div>;

  return (
    <StyledItemsList>
      {items.map((item, i) => (
        <Item item={item} key={i} />
      ))}
    </StyledItemsList>
  );
}

export default ItemsList;
