import logo from './logo.svg';
import './App.css';
import { DiAtom } from "react-icons/di";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='bg-slate-500'>
          Edit <code>src/App.js</code> and save to reload.
          <DiAtom />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="text-3xl font-bold underline text-blue-500">Tailwind 적용 완료!</h1>
      </header>
    </div>
  );
}

export default App;
