import styled from 'styled-components';
import { useItems } from '../../contexts/ItemsContext';
import Item from './Item';

const StyledItemsList = styled.div`
  display: flex;
`;
function ItemsList() {
  const { items, isLoading } = useItems();
  if (isLoading) return <div>Loading</div>;
  if (items.length === 0) return <div>No items</div>;

  return <Item item={items[0]} />;
}

export default ItemsList;
