import React from "react";
import SearchBar from "../components/navBar/Search";
import Logo from "../components/navBar/Logo";

function Header(){


return (
    <div className="flex justify-between items-center p-2 overflow-hidden">
    <Logo />
    <SearchBar />
  </div>
)

}

export default Header;