import React from "react";
import Search from "./Search";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import MovieDetails from "./MovieDetails";
import {Switch} from "react-bootstrap";

export default class App extends React.Component {
  render() {

    return (
        <BrowserRouter>


            <div className="App">
                <Switch>
                    <Route exact path="/" component={Search}/>
                    <Route path="/bloop/:id" component={MovieDetails}/>
                </Switch>

            </div>

        </BrowserRouter>
    );
  }

}

