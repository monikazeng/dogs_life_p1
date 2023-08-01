import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AllHeroes from './components/AllHeroes';
import HeroForm from './components/HeroForm';
import { Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import HeroDetail from './components/HeroDetail';


function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Heroes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/allheroes">All Heroes</Nav.Link>
              <Nav.Link href="/addhero">Add Hero</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/allheroes" element={<AllHeroes />} />
        <Route path="/addhero" element={<HeroForm />} />
        <Route path="/" element={<AllHeroes />} />
      </Routes>

    </>
  );
}
// return(
// <AllHeroes/>
// <HeroDetail/>

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
// )




export default App;
