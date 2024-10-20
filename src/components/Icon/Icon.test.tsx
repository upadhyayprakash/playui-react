import { RenderResult, render as rtlRender } from '@testing-library/react';
import Icon from './Icon';
import { FaUser, FaBell } from 'react-icons/fa'; // Example imports from react-icons
import { cloneElement } from 'react';

// Custom render function to inject data-testid dynamically
const render = (ui: React.ReactElement, { testId = 'TEST_ID', ...options } = {}): RenderResult => {
  return rtlRender(
    cloneElement(ui, { ['data-testid']: testId }), // Dynamically pass 'data-testid' prop
    options
  );
};

describe('Icon Component', () => {
  it('renders a predefined icon (user)', () => {
    const { getByTestId } = render(<Icon icon={<FaUser />} size="2rem" />, { testId: 'icon' });
    const iconElement = getByTestId('icon'); // Assuming the StyledIcon uses role="img"

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveStyle({ fontSize: '2rem' });
    expect(iconElement).toContainHTML('<svg'); // Ensure an SVG is rendered
  });

  it('renders a predefined icon (bell)', () => {
    const { getByTestId } = render(<Icon icon={<FaBell />} size="2rem" />, { testId: 'icon' });
    const iconElement = getByTestId('icon');

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveStyle({ fontSize: '2rem' });
    expect(iconElement).toContainHTML('<svg'); // Ensure an SVG is rendered
  });

  it('renders a custom React node icon', () => {
    const { getByTestId } = render(<Icon icon={<FaBell />} size="1.5rem" />, { testId: 'icon' });
    const iconElement = getByTestId('icon');

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveStyle({ fontSize: '1.5rem' });
    expect(iconElement).toContainHTML('<svg'); // Ensure an SVG is rendered
  });

  it('renders with default size when size prop is not provided', () => {
    const { getByTestId } = render(<Icon icon={<FaUser />} />, { testId: 'icon' });
    const iconElement = getByTestId('icon');

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveStyle({ fontSize: '1.5rem' }); // Default size
  });

  it('renders without crashing for unrecognized icon', () => {
    const { getByTestId } = render(<Icon icon={'Invalid Icon'} />, { testId: 'icon' });
    const iconElement = getByTestId('icon');

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toContainHTML('Invalid Icon'); // Check for the custom React node
  });
});
