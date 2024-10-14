import { render } from '@testing-library/react';
import Icon from './Icon';
import { FaUser, FaBell } from 'react-icons/fa'; // Example imports from react-icons

describe('Icon Component', () => {
  it('renders a predefined icon (user)', () => {
    const { getByRole } = render(<Icon icon={<FaUser />} size="2rem" />);
    const iconElement = getByRole('img'); // Assuming the StyledIcon uses role="img"

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveStyle({ fontSize: '2rem' });
    expect(iconElement).toContainHTML('<svg'); // Ensure an SVG is rendered
  });

  it('renders a predefined icon (bell)', () => {
    const { getByRole } = render(<Icon icon={<FaBell />} size="2rem" />);
    const iconElement = getByRole('img');

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveStyle({ fontSize: '2rem' });
    expect(iconElement).toContainHTML('<svg'); // Ensure an SVG is rendered
  });

  it('renders a custom React node icon', () => {
    const { getByRole } = render(<Icon icon={<FaBell />} size="1.5rem" />);
    const iconElement = getByRole('img');

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveStyle({ fontSize: '1.5rem' });
    expect(iconElement).toContainHTML('<svg'); // Ensure an SVG is rendered
  });

  it('renders with default size when size prop is not provided', () => {
    const { getByRole } = render(<Icon icon={<FaUser />} />);
    const iconElement = getByRole('img');

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveStyle({ fontSize: '1rem' }); // Default size
  });

  it('renders without crashing for unrecognized icon', () => {
    const { getByRole } = render(<Icon icon={'Invalid Icon'} />);
    const iconElement = getByRole('img');

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toContainHTML('Invalid Icon'); // Check for the custom React node
  });
});
