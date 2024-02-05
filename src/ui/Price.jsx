import styled from 'styled-components';
import { convertCurrency } from '../services/convertCurrency';

const StyledPrice = styled.div`
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
function Price({ price, discountPrice }) {
  return (
    <StyledPrice>
      {discountPrice ? convertCurrency(discountPrice) : convertCurrency(price)}
      <span>{discountPrice && convertCurrency(price)}</span>
    </StyledPrice>
  );
}

export default Price;
