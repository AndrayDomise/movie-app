import React from 'react';
import axios from 'axios';
import Movies from '../../Pages/Movies/Movies';


class Fetcher extends React.Component(){
    constructor(props){
        super(props);
        this.state= {
            posters: []
        }
        this.getPosters = this.getPosters.bind(this);
    }

    url="https://image.tmdb.org/t/p/original";

    
    async getPosters(){
        try{
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17&language=en-US&page=1`)
            .then(res => {
                let images = res.data.results.map(function(results){
                    return results.poster_path
                })
                const posters = images.forEach(item => url+item);
                this.setState({ posters: posters });
            });
        } catch (err){
            console.log("Something went wrong!", err)
        }
    }

    render(){
        return(
            <div>
                <Movies
                    getPosters={this.getPosters}
                />
            </div>
        )
    }
};

export default Fetcher;