import { HiOutlineBars3 } from 'react-icons/hi2';
import styled from 'styled-components';
import DesktopMenu from './DesktopMenu';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 1.2rem;
  min-width: 0;
`;
const Image = styled.img`
  width: 5rem;
`;
function Header({ children }) {
  const { width } = useWindowDimensions();
  return (
    <StyledHeader>
      <Image src="/logo.jpg" />
      {width > 960 && <DesktopMenu />}
      {width < 961 && <HiOutlineBars3 />}
    </StyledHeader>
  );
}

export default Header;
