import React from "react";
import Home from './components/Home';
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Favorites } from "./components/Favorites";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";


const App = () => {
  return (
  <div>
      <Router>
      <Home />
      <Routes>
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/watched' element={<Watched />} />
        <Route path='/add' element={<Add />} />
      
      </Routes>
    </Router>
      </div>

  );
}

export default App;