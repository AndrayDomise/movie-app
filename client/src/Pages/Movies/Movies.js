import React from 'react';
import axios from 'axios';
import Cards from '../../Components/Cards/Cards';

export default class Movies extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            posters: [],
            likedMovies: [],
        }
        this.getPosters = this.getPosters.bind(this);
        this.getLikedMovies = this.getLikedMovies.bind(this);
    }

    getPosters(){
        const url="https://image.tmdb.org/t/p/original";
        
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17&language=en-US&page=1`)
            .then(res => {
                console.log(res);
                this.setState({posters: res.data.results});
            })
        .catch('something went wrong');
    }

    getLikedMovies() {
        axios.get('http://localhost:8080/liked')
            .then(res => this.setState({
                ...this.state,
                likedMovies: res.data,
            })
        );
    }

    async componentDidMount() {
        try {
            this.getPosters();
            this.getLikedMovies();
        } catch (err){
            console.log("error", err);
        }
    }

    render() {
        
    return (
        <div>
            <Cards 
                posters={this.state.posters} 
                likedMovies={this.state.likedMovies}
                afterLikeUnlike={this.getLikedMovies}
            />
        </div>

    )
    }
}