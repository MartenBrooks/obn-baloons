import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import IconsMenu from '../../ui/IconsMenu';
import { Promo } from '../../ui/Promo';

function HomepageHeader() {
  const { width } = useWindowDimensions();
  return (
    // Тут будут кнопки быстрого доступа для популярных категорий
    <>
      <Promo src="/promo.jpg" />
      {width < 961 && <IconsMenu />}
    </>
  );
}

export default HomepageHeader;
