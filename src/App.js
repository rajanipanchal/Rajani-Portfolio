import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contect from './components/Contect'
import Footer from './components/Footer'
function App() {
  

  return (
 <>
  <Router>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contect/>
      <Footer/>
  </Router>
  </>
  );
}

export default App;
