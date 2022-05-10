import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About } from "./components/About";
import { Search } from "./components/Search";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { Home } from "./components/Home";
import { Favorites } from "./components/Favorites";
// import Favorite from "./components/Favorite";

const App = () => {

  return (
      <Router>
      <Navbar />

      <Routes>
        
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        {/* <Route path='/favorite'element={<Favorite />} /> */}
      </Routes>
    </Router>
  
  );
};

export default App;