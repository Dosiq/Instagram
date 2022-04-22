import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js'
import Main from './components/Main/Main.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
      </header>
    </div>
  );
}

export default App;
