import { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  /**
   * Type of button
   */
  variant?: 'primary' | 'secondary';
  /**
   * Size of the button. Choose based on context.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button content displayed. It can be text or other React component.
   */
  children?: ReactNode;
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
  ...rest
}: ButtonProps): React.ReactNode => {
  return (
    <StyledButton variant={variant} size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

type StyledButtonProps = Partial<ButtonProps>;

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-block;
  background-color: ${({ theme, variant }) =>
    variant === 'primary'
      ? theme.button?.primary.backgroundColor
      : theme.button?.secondary.backgroundColor};
  color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.button?.primary.color : theme.button?.secondary.color};
  border: 0;
  outline: 0;
  border-radius: 4px;
  font-size: ${({ size }) => (size === 'small' ? '12px' : size === 'large' ? '16px' : '14px')};
  padding: ${({ size }) =>
    size === 'small' ? '10px 16px' : size === 'large' ? '12px 24px' : '11px 20px'};
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
