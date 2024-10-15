import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

type ButtonSizes = 'small' | 'medium' | 'large';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Button content. It can be text or a React component.
   */
  children: ReactNode;

  /**
   * Type of button
   */
  variant?: 'primary' | 'secondary';

  /**
   * Size of the button. Choose based on context.
   */
  size?: ButtonSizes;

  /**
   * To accept any additional class names
   */
  className?: string;

  /**
   * Handler for 'click' event.
   */
  onClick?: () => void;
}

/**
 * A clickable button component.
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  className,
  ...rest
}: ButtonProps): React.ReactNode => {
  return (
    <StyledButton variant={variant} size={size} className={className} {...rest}>
      {children}
    </StyledButton>
  );
};

type ButtonSizeValues = { fontSize: string; padding: string };

const sizeMap: Record<ButtonSizes, ButtonSizeValues> = {
  small: { fontSize: '0.75rem', padding: '0.625rem 1rem' },
  medium: { fontSize: '0.875rem', padding: '0.75rem 1.25rem' },
  large: { fontSize: '1rem', padding: '0.75rem 1.5rem' },
};

interface StyledButtonProps extends Omit<ButtonProps, 'size'> {
  size: 'small' | 'medium' | 'large';
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-block;
  background-color: ${({ theme, variant }) =>
    variant === 'primary'
      ? theme.button?.primary.backgroundColor
      : theme.button?.secondary.backgroundColor};
  color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.button?.primary.color : theme.button?.secondary.color};
  border: 0;
  border-radius: 0.25rem;
  font-size: ${({ size }) =>
    sizeMap[size].fontSize || sizeMap['medium'].fontSize}; // Dynamic font-size
  padding: ${({ size }) => sizeMap[size].padding || sizeMap['medium'].padding};
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === 'primary'
        ? theme.button?.primary.backgroundHoverColor
        : theme.button?.secondary.backgroundHoverColor};
  }
  &:active {
    background-color: ${({ theme, variant }) =>
      variant === 'primary'
        ? theme.button?.primary.backgroundFocusColor
        : theme.button?.secondary.backgroundFocusColor};
  }
`;

export type { ButtonProps };
export default Button;
