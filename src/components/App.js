import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import { Route, Switch, Router } from "react-router-dom";

function App() {
    // function getPage() {
    //     const route = window.location.pathname;
    //     if (route === "/about") return <AboutPage />;
    //     return <HomePage />;
    // }
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
            </Switch>

        </div>
    );
}

export default App;
