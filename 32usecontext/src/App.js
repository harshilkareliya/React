import './App.css';
import ThemeProvider from './ThemeProvider';
import ToggleTheme from './ToggleTheme';

function App() {
  return (
    <ThemeProvider>
      <ToggleTheme/>
    </ThemeProvider>
  );
}

export default App;
