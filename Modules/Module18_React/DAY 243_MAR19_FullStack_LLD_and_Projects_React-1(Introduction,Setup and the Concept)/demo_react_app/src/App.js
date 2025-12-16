import logo from './logo.svg';
import './App.css';
import Heading from "./Heading";
import MainContainer from "./Components/MainContainer";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Counter from './Components/Counter';

function App() {
  return (
    
    <div id = "parent">
    {/*<div id = "child">
        <h1 id = "greetings">Hello from React</h1>
        <h2 id = "greetings1">Hello from React2</h2>
    </div>*/}
{/*     <Heading />
    <MainContainer />
    <NavBar />s
    <Footer /> */}
    <Counter />
    <Counter />
    <Counter />
    </div>
   
  );
}

export default App;
