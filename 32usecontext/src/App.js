import './App.css';
import ThemeProvider from './ThemeProvider';
import ToggleTheme from './ToggleTheme';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <ThemeProvider>
      <ToggleTheme/>
    </ThemeProvider>
  );
}

export default App;
