import logo from './logo.svg';
import './App.css';
import io  from "socket.io-client";
//const SERVER = "http://127.0.0.1:5000";


function App() {

  //var socket = io(SERVER);
  var socket = io.connect('/');
  socket.on('connect', () => {
    console.log("i'm connected with back-end")
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;