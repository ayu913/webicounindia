import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Webinar from "./Webinar";
import Blog from "./Blog";

import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/webinar" component={Webinar} />
                <Route exact path="/blog" component={Blog} />
                 <Redirect to="/" />

            </Switch>
          <Footer/>
        </>
    );
};


export default App;
