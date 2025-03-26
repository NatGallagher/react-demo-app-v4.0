import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import NavBar from "./components/NavBar";
import Page1 from "./components/Page1";

function App() {

  return (
    <>
      <HashRouter> 
        <NavBar/>        
      <Routes>      
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/page1" element={<Page1/>}/>
      </Routes>
    </HashRouter>   
    </>
  );
}

export default App;
