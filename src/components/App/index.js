// Node modules.
import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
// Relative imports.
import "./styles.scss";
import Footer from "../Footer";
import Nav from "../Nav";
import Swap from "../Swap";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Top nav */}
        <Nav />

        {/* Main content */}
        <main>
          <Switch>
            <Route path="/swap">
              <Swap />
            </Route>
            <Redirect to="/swap" />
          </Switch>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
