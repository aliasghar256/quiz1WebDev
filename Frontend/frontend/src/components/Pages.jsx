import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Recipes from "./Recipes";
import Header from "./Header";

// import Footer from "../common/footer/Footer";
// import About from "../about/About";
// import Pricing from "../pricing/Pricing";
// import Blog from "../blog/Blog";
// import Services from "../services/Services";
// import Contact from "../contact/Contact";
// import FeatureBlock from "../projectPage/projectPage";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Recipes} />
          {/* <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          {/* <Route exact path='/pricing' component={Pricing} /> */}
          {/* <Route exact path="/contact" component={Contact} />
          <Route exact path="/projectPage" component={FeatureBlock} /> */}
        </Switch>
      </Router>
    </>
  );
};

export default Pages;
