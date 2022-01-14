import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopMenuBar from "./Components/Includes/TopMenuBar";
import Footer from "./Components/Includes/Footer";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Men from './Components/Men/Men';
import Women from './Components/Women/Women';
import Customization from './Components/Customization/Customization';

function App() {
  return (
    <div>
      <Router>
        <TopMenuBar />
        <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/about" index element={<About />}></Route>
        <Route path="/contact" index element={<Contact />}></Route>
        <Route path="/men" index element={<Men />}></Route>
        



        <Route path="/women" index element={<Women />}></Route>
        <Route path="/customization" index element={<Customization />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
