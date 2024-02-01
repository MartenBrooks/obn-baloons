import styled from 'styled-components';
import { Button } from '../../ui/Button';
import { ButtonGroup } from '../../ui/ButtonGroup';
import { Promo } from '../../ui/Promo';

const styledHomepageHeader = styled.header`
  position: relative;
`;
function HomepageHeader() {
  return (
    // Тут будут кнопки быстрого доступа для популярных категорий
    <>
      <ButtonGroup>
        <Button>Категория</Button>
        <Button>Категория</Button>
        <Button>Категория</Button>
        <Button>Категория</Button>
      </ButtonGroup>
      <Promo src="/promo.jpg" />
    </>
  );
}

export default HomepageHeader;
