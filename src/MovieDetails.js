import React, { Component, useState } from "react";
import Axios from "axios";
import Search from "./Search";
import useForceUpdate from "use-force-update";


export default class MovieDetails extends Component {




    constructor(props) {
        super(props);
        this.state = {
            movieData: {}
        };
    }
    componentDidMount() {
        this.props.history.push(this.props.location);
        this.makeRequest();
    }

    makeRequest = () => {
        Axios.get(
            "http://www.omdbapi.com/?i=" + this.props.match.params.id + "&apikey=407b600b"
        ).then(response =>
            response.data)
            .then(res => {
                this.setState({
                    movieData: res
                });
            });
        console.log(this.state.movieData);

    };


    render() {
        const {
            Title,
            Released,
            Genre,
            Plot,
            Poster,
            imdbRating,
            Metascore,
            Type,
            Language,
            Runtime
        } = this.state.movieData;

        if(!Poster || Poster === 'N/A') {
            return null;
        }
        return (
            <div className="movie-card-container">
                <Search></Search>
                <div className="image-container">
                    <img src={Poster} />
                    <div />

                </div>
                <div className="movie-info">
                    <h2>Movie Details: </h2>
                    <div>
                        <h1>{Title}</h1>
                        <small>Release Data: {Released}</small>
                    </div>
                    <h4>IMDB-Rating: {imdbRating} / 10</h4>
                    <h4>Metascore rating: {Metascore}</h4>
                    <p>{Plot && Plot.substr(0, 350)}</p>
                    <div className="genre-container">
                        {Genre && Genre.split(' , ').map(g => (
                            <span key={g}>{g}</span>
                        ))}
                    </div><br/>
                    <div className="language-container">
                        {Language && Language.split(' , ').map(l => (
                            <span key={l}>{l}</span>
                        ))}
                    </div><br/>
                    <div className="runtime-container">
                        <strong>Runtime: {Runtime}</strong>
                    </div>
                    <div className="type-container">
                        <h4>Type: {Type}</h4>
                    </div>
                </div>
            </div>
        );
    }

}