import styled from 'styled-components';

const StyledSidebar = styled.aside`
  display: none;
  @media (min-width: 961px) {
    display: flex;
    flex-direction: column;
    padding: 6rem 2rem;
    grid-row: 1 / -1;
  }
`;
function Sidebar() {
  return (
    <StyledSidebar>
      <div>Lalala</div>
      <div>Lalala</div>
      <div>Lalala</div>
      <div>Lalala</div>
    </StyledSidebar>
  );
}

export default Sidebar;
