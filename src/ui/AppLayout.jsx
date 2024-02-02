import styled from 'styled-components';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

const StyledAppLayout = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: relative; */

  display: grid;
  grid-template-rows: auto 1fr auto;

  max-width: 95vw;
  min-height: 100vh;
  @media (min-width: 961px) {
    grid-template-columns: 15rem 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const StyledMain = styled.main`
  background-color: var(--color-grey-50);
  padding: 1.2rem 1.2rem 6.4rem;
  min-width: 0;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  const { width } = useWindowDimensions();
  return (
    <StyledAppLayout>
      <Header />
      {width > 960 && <Sidebar />}
      <StyledMain>
        <Container>
          <Outlet />
        </Container>
      </StyledMain>
      {width < 961 && <MobileMenu />}
    </StyledAppLayout>
  );
}

export default AppLayout;
