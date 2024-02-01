import styled from 'styled-components';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100vh;

  @media (min-width: 961px) {
    grid-template-columns: 15rem 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const StyledMain = styled.main`
  background-color: var(--color-grey-50);
  padding: 1rem 1rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <DesktopMenu />
      <Sidebar />
      <StyledMain>
        <Container>
          <Outlet />
        </Container>
      </StyledMain>
      <MobileMenu />
    </StyledAppLayout>
  );
}

export default AppLayout;
