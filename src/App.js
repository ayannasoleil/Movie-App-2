import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Favorites } from "./components/Favorites";
import { Viewed } from "./components/Viewed";
import { Search } from "./components/Search";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from './context/Globals';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
      <Home />
      <Routes>
        
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/viewed' element={<Viewed />} />
        <Route path='/search' element={<Search />} />
      
      </Routes>
    </Router>
    </GlobalProvider>
  );
}

export default App;