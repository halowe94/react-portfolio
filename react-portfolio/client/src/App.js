//import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Container from "./components/Container/Container"

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
        <Container />
    </div>
  );
}

export default App;
