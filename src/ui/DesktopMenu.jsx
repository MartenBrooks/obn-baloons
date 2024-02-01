import styled from 'styled-components';

const NavList = styled.ul`
  display: none;

  background-color: var(--color-grey-0);
  padding: 0.5rem 1.5rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  @media (min-width: 961px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
function DesktopMenu() {
  return (
    <NavList>
      <li>Главная</li>
      <li>Каталог</li>
      <li>Корзина</li>
      <li>Настройки</li>
    </NavList>
  );
}

export default DesktopMenu;
