import React from "react";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

export default function App(props) {
  return (
    <Router>
      <Header />
    </Router>
  );
}
