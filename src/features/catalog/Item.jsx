import styled from 'styled-components';
import ItemDescription from './ItemDescription';
import { convertCurrency } from '../../services/convertCurrency';
import UpdateItemQuantity from './UpdateItemQuantity';
import Modal from '../../ui/Modal';
import Price from '../../ui/Price';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 7rem;
  font-size: 1rem;
  background-color: var(--color-brand-50);
  padding: 0.1rem 0.2rem;
  border-radius: 5px;
`;
const Image = styled.img`
  border-radius: 5px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.5rem 0.5rem;
`;

const Name = styled.div`
  font-size: 0.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
function Item({ item }) {
  return (
    <Modal>
      <Container>
        <>
          <Modal.Open opens="item-desc">
            <Image
              src={item.image}
              alt={item.name}
            />
          </Modal.Open>
          <Description>
            <Price
              price={item.price}
              discountPrice={item.discountPrice}
            />
            <Name>{item.name}</Name>
          </Description>
        </>

        <Modal.Window name="item-desc">
          <ItemDescription item={item} />
        </Modal.Window>
        <UpdateItemQuantity />
      </Container>
    </Modal>
  );
}

export default Item;
