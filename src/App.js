import logo from './logo.svg';
import './App.css';
import Partida from './components/pure/componentePartida';

function App() {

  const user = {
    name: "Miguel",
    points: 100,
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Partida usuario={user}/>
      </header>
    </div>
  );
}

export default App;
