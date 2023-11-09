import React from "react";
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";


import "./Header.css";
import TopBar from "../TopBar/TopBar";

export default function Header() {
  return (
    <header className="header">
        <TopBar />
        <Navbar />
        <Landing />
    </header>
  );
}
