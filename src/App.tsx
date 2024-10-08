import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Button from './components/Button';

function App(): React.ReactNode {
  return (
    <>
      <ThemeProvider>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
          <ThemeToggle />
          <Button
            onClick={() => alert('clicked')}
            // variant="primary"
            size="large"
          >
            Button
          </Button>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
