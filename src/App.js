import './App.css';
import Flashcards from './Flashcards';
import ThemeProvider from './ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Flashcards />
      </ThemeProvider>
    </div>
  );
}

export default App;
