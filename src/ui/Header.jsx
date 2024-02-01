import styled from 'styled-components';
import Icon from './Icon';

const StyledHeader = styled.div`
  padding: 1rem;
`;

const Image = styled.img`
  width: 5rem;
`;
function Header({ children }) {
  return (
    <StyledHeader>
      <Image src='/logo.jpg' />
    </StyledHeader>
  );
}

export default Header;
