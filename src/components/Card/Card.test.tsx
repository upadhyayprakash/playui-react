// unit tests
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  test('renders correctly', () => {
    render(<Card title="New Card">Card Description</Card>);
    expect(screen.getByText('New Card')).toBeInTheDocument();
  });
});
