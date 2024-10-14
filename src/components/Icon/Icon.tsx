import { ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The name of the icon, or an actual icon component.
   */
  icon: ReactNode;
  /**
   * Size of the icon (e.g., small, medium, large).
   */
  size?: 'small' | 'medium' | 'large' | string;
  /**
   * Color of the icon.
   */
  color?: string;
  /**
   * Optional click handler.
   */
  onClick?: () => void;
}

/**
 * A reusable Icon component.
 */
const Icon = ({ icon, size, color, onClick, ...rest }: IconProps): React.ReactNode => {
  return (
    <StyledIcon size={size} color={color} onClick={onClick} {...rest} role="img">
      {icon}
    </StyledIcon>
  );
};

interface StyledIconProps extends Partial<IconProps> {
  size?: 'small' | 'medium' | 'large' | string;
}

const StyledIcon = styled.span<StyledIconProps>`
  display: inline-flex;
  font-size: ${({ size }) => sizeMap[size as keyof typeof sizeMap] || size || '1rem'};
  color: ${({ color, theme }) => color || theme.icon?.defaultColor || 'inherit'};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
`;

const sizeMap: { [key: string]: string } = {
  small: '1rem',
  medium: '1.5rem',
  large: '2rem',
};

export type { IconProps };
export default Icon;
