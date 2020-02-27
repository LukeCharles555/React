import React, { Component } from "react";
import Axios from "axios";
import MovieList from "./MovieList";
import { Button } from 'react-bootstrap';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

export default class Search extends React.Component {
    constructor(props) {

        super(props);
    }
    state = {
        moviesList:[],
        searchTerm: ''
    };


    search = event => {
        event.preventDefault();
        Axios.get("http://www.omdbapi.com/?s=" + this.state.searchTerm + "&apikey=407b600b")
            .then(res => res.data)
            .then(res => {
                if(!res.Search) {
                    this.setState({moviesList: [] });
                    return;
                }

                const moviesList = res.Search.map(movie => movie.imdbID);
                this.setState({
                    moviesList
                });
            });
    };

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
    };

    render() {
        const { moviesList } = this.state;

        return (
            <div>
                <Navbar className="navbar" bg="dark" expand="lg">
                    <Navbar.Brand href="#home">OMDB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>

                        </Nav>
                        <Form onSubmit={this.search} inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange} />
                            <Button type="submit" variant="outline-success" id="searchButton">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                {moviesList.length > 0 ? (
                    moviesList.map(movie => (
                        <MovieList movieID={movie} key={movie} history={this.props.history}/>
                    ))
                ) : (
                    <p>Couldn't find a movie, try again</p>
                )}
    </div>


        );
    }
}