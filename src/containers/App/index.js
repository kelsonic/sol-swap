// Node modules.
import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
// Relative imports.
import "./styles.scss";
import Provider from "./provider";
import Footer from "../../components/Footer";
import Modal from "../../containers/Modal";
import Nav from "../../components/Nav";
import Swap from "../../components/Swap";

export const App = () => {
  return (
    <Provider>
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

          {/* Modal */}
          <Modal />

          {/* Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
