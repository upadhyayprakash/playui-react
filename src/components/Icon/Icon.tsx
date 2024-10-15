import { ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';

type IconSizes = 'small' | 'medium' | 'large';

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The name of the icon, or an actual icon component.
   */
  icon: ReactNode;

  /**
   * Size of the icon (e.g., small, medium, large).
   */
  size?: IconSizes | string;

  /**
   * Color of the icon.
   */
  color?: string;

  /**
   * To accept any additional class names
   */
  className?: string;

  /**
   * **aria-label** for clickable icon. It's used by screen readers.
   */
  ariaLabel?: string;

  /**
   * Optional click handler.
   */
  onClick?: () => void;
}

/**
 * A reusable Icon component.
 */
const Icon = ({
  icon,
  size,
  color,
  onClick,
  className,
  ariaLabel,
  ...rest
}: IconProps): React.ReactNode => {
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (onClick && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <StyledIcon
      size={size}
      color={color}
      onClick={onClick}
      className={className}
      role={onClick ? 'button' : 'img'}
      tabIndex={onClick ? 0 : undefined}
      aria-label={ariaLabel || 'Icon'}
      onKeyDown={handleKeyDown} // Handle keyboard interaction for Accessibility
      {...rest}
    >
      {icon}
    </StyledIcon>
  );
};

const sizeMap: Record<IconSizes, string> = {
  small: '1rem',
  medium: '1.5rem',
  large: '2rem',
};

interface StyledIconProps extends Partial<IconProps> {
  size?: IconSizes | string;
}

const StyledIcon = styled.span<StyledIconProps>`
  display: inline-flex;
  font-size: ${({ size }) => sizeMap[size as keyof typeof sizeMap] || size || '1rem'};
  color: ${({ color, theme }) => color || theme.icon?.defaultColor || 'inherit'};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
`;

export type { IconProps };
export default Icon;
