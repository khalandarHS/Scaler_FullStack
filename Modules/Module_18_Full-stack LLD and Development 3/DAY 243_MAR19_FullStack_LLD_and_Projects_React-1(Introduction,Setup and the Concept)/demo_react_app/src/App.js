import logo from './logo.svg';
import './App.css';
import Heading from "./Heading";

function App() {
  return (

    <div id = "parent">
    <div id = "child">
        <h1 id = "greetings">Hello from React</h1>
        <h2 id = "greetings1">Hello from React2</h2>
    </div>
    <Heading/>
    <MainContainer/>
    <NavBar/>
    <Footer/>
    </div>

   /* <h1>Hello World!</h1>*/
    /*<div className="App">
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
    </div> */
  );
}

export default App;
