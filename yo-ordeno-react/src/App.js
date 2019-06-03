import React from "react";
import "./App.css";
import Router from "./Router";
import NavBar from "./app/common/NavBar";
import Footer from "./app/common/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
