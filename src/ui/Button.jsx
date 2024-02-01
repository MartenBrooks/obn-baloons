import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    padding: 0.2rem 0.4rem;
    @media (min-width: 961px) {
      font-size: 1.2rem;
      padding: 0.4rem 0.8rem;
    }

    font-weight: 500;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    background-color: var(--color-brand-600);
    color: var(--color-grey-0);
  `,
};
export const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]};
`;

Button.defaultProps = {
  size: 'small',
  variation: 'primary',
};
