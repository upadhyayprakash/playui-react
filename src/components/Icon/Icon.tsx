import { ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';

// Enum-like data structure for sizes
export const IconSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

type IconSizes = keyof typeof IconSize;

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
   * **aria-label** for accessibility by screen readers, if required.
   */
  ariaLabel?: string;
}

/**
 * A reusable Icon component.
 */
const Icon = ({
  icon,
  size = IconSize.medium, // default value
  color,
  className,
  ariaLabel,
  ...rest
}: IconProps): React.ReactNode => {
  return (
    <StyledIcon
      size={size}
      color={color}
      className={className}
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      {...rest}
    >
      {icon}
    </StyledIcon>
  );
};

const sizeMap: Record<IconSizes, string> = {
  [IconSize.small]: '1rem',
  [IconSize.medium]: '1.5rem',
  [IconSize.large]: '2rem',
};

const StyledIcon = styled.span<{ size?: IconSizes | string; color?: string }>`
  display: inline-flex;
  font-size: ${({ size }) => sizeMap[size as keyof typeof sizeMap] || size};
  color: ${({ color, theme }) => color || theme.icon?.defaultColor || 'inherit'};
`;

export type { IconProps };
export default Icon;
