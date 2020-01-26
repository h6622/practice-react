import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./pages/main";
import About from "./pages/about";
import Project from "./pages/project";
import Contact from "./pages/contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/about" component={About} />
      <Route path="/project" component={Project} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
