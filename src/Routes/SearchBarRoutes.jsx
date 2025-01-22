import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchBar, SearchBtn } from "../components/index";

function SearchRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchBtn/>} />
        <Route path="/search-bar" element={<SearchBar />} />
      </Routes>
    </Router>
  );
}
export default SearchRoutes;
