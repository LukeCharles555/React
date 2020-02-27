import React, { Component } from "react";
import Axios from "axios";
import { withRouter } from 'react-router-dom';
import { Card } from "react-bootstrap";

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieData: {}
        };


    }
     // setRedirect = () => {
     //     this.setState({
     //         redirect: true
     //     })
     // }
     // renderRedirect(id){
     //     if (this.state.redirect) {
     //         return <Redirect to={'/bloop/'+id} />
     //     }
     // }





    componentDidMount() {
        this.makeRequest();
    }


    makeRequest = () => {

    Axios.get(
        "http://www.omdbapi.com/?i=" + this.props.movieID + "&apikey=407b600b"
    ).then(response =>
        response.data)
            .then(res => {
                this.setState({
                    movieData: res
                });
            });


};

test(imdbID) {
    this.props.history.push("/bloop/" + imdbID);
 }


    render() {
        const {
            imdbID,
            Title,
            Released,
            Poster,

        } = this.state.movieData;

        if(!Poster || Poster === 'N/A') {
            return null;
        }

    return (

        <Card border="dark" className="movie-card-container" style={{ width: '18rem', height: '28rem' }}>
            <Card.Img className="image-container" style={{ width: '17rem', height: '20rem' }} variant="top" src={Poster} onClick={() => this.props.history.push("/bloop/" + imdbID)} />

            <Card.Body className="movie-info">
                <Card.Title>{Title}</Card.Title>


            </Card.Body>
        </Card>

    );
}
}
export default withRouter(MovieList);