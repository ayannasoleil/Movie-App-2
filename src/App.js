import React from "react";
import Home from './components/Home';
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Favorites } from "./components/Favorites";
import { Add } from "./components/Add";
import { Viewed } from './components/Viewed';

import { GlobalProvider } from './context/Globals';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
      <Home />
      <Routes>
        
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/viewed' element={<Viewed />} />
        <Route path='/add' element={<Add />} />
      
      </Routes>
    </Router>
    </GlobalProvider>
  );
}

export default App;