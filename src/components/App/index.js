// Node modules.
import React from "react";
// Relative imports.
import Footer from "../Footer";
import Nav from "../Nav";
import "./styles.scss";

export const App = () => {
  return (
    <div className="app">
      <Nav />
      <Footer />
    </div>
  );
};

export default App;
