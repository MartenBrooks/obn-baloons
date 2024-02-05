import styled from 'styled-components';
import { Button } from '../../ui/Button';

const Quantity = styled.div`
  background-color: var(--color-grey-0);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-grey-0);
`;
function UpdateItemQuantity() {
  return (
    <ButtonGroup>
      <Button
        variation="rounded"
        size="small"
      >
        &minus;
      </Button>
      <Quantity>1</Quantity>
      <Button
        variation="rounded"
        size="small"
      >
        +
      </Button>
    </ButtonGroup>
  );
}

export default UpdateItemQuantity;
