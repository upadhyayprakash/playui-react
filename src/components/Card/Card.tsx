import { ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card = ({ title, children, ...rest }: CardProps): React.ReactNode => (
  <StyledCard {...rest}>
    <h3>{title}</h3>
    {children}
  </StyledCard>
);

type StyledCardProps = Partial<CardProps>;

const StyledCard = styled.div<StyledCardProps>`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export type { CardProps };
export default Card;
