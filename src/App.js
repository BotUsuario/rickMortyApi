import imagenRichMorty from "./img/rick-morty.png"
import './App.css';

function App() {
  const reqApi = () =>{
    console.log('click')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        <img src={imagenRichMorty} className="img-home" alt="Rich & Morty" />
        <button onClick={reqApi} className="btn-search">
          Buscar Personajes
        </button>
      </header>
    </div>
  );
}

export default App;
