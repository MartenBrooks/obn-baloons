import styled from 'styled-components';
import {
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineCog6Tooth,
  HiOutlineSquares2X2,
} from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--color-grey-50);
  padding: 0.5rem 1.5rem;

  @media (min-width: 961px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-brand-500);
    transition: all 0.3s;
  }
`;
function MobileMenu() {
  return (
    <NavList>
      <li>
        <StyledNavLink to="/">
          <HiOutlineHome />
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/catalog">
          <HiOutlineSquares2X2 />
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/cart">
          <HiOutlineShoppingCart />
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/">
          <HiOutlineCog6Tooth />
        </StyledNavLink>
      </li>
    </NavList>
  );
}

export default MobileMenu;
