import styled from 'styled-components';
import Icon from './Icon';

const StyledIconsMenu = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: scroll;
`;

function IconsMenu() {
  return (
    <StyledIconsMenu>
      <Icon image="/nabor1.jpg">Доставка</Icon>
      <Icon image="/nabor1.jpg">Наборы</Icon>
      <Icon image="/nabor1.jpg">Цифры</Icon>
      <Icon image="/nabor1.jpg">Фигуры</Icon>
      <Icon image="/nabor1.jpg">Шары</Icon>
      <Icon image="/nabor1.jpg">Прочее</Icon>
    </StyledIconsMenu>
  );
}

export default IconsMenu;
