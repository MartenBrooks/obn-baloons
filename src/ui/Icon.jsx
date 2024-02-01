import styled from 'styled-components';

const Image = styled.img`
  border: 1px solid var(--color-grey-300);
  box-shadow: var(--shadow-sm);
  border-radius: 5px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 5rem;
  font-size: 1rem;
  padding: 0 0.4rem;
`;
function Icon({ image, children }) {
  return (
    <IconContainer>
      <Image src={image} alt={image} />
      <span>{children}</span>
    </IconContainer>
  );
}

export default Icon;
