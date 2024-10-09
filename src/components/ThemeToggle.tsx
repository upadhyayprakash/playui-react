import { useTheme } from '../context/ThemeContext';
import { lightTheme } from '../themes';
import { Button } from './Button';

const ThemeToggle = (): React.ReactNode => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} variant="secondary">
      Switch to {theme === lightTheme ? 'Dark' : 'Light'} Mode
    </Button>
  );
};

export default ThemeToggle;
