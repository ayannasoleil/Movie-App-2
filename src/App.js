import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Favorites } from "./components/Favorites";
import { Viewed } from "./components/Viewed";
import { Search } from "./components/Search";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from './globals/Globals';
import { Home } from "./components/Home";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
      <Navbar />
      <Routes>
        
        <Route path='/home' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/viewed' element={<Viewed />} />
        <Route path='/search' element={<Search />} />
      
      </Routes>
    </Router>
    </GlobalProvider>
  );
}

export default App;