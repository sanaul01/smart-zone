import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home/Home';
import Header from './Components/Home/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Home/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
      <Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/footer"
        element={<Footer />}
      />
    </Routes>
    </div>
  );
}

export default App;
