import React from 'react';
import axios from 'axios';
import './Cards.scss'
const dontLikeImage = '/assets/thumbupout.png';
const likeImg = '/assets/thumbupblk.png';


class Cards extends React.Component {
    constructor(props){
        super(props);
        this.state={
            liked: false,
        }
    }
    
    handleLike (obj) {
        axios.post('http://localhost:8080/liked', obj)
        .then(() => this.props.afterLikeUnlike())
        .catch(() => console.log('something went wrong'));
    }

    handleUnlike (obj) {
        axios.post('http://localhost:8080/unlike', obj)
        .then(() => this.props.afterLikeUnlike())
        .catch(() => console.log('something went wrong'));
    }

    render() {
        const {movies, posters, likedMovies} = this.props;

        return (
            <div className="container">
                {
                posters.map(poster => (
                    <div key={poster.id} className="container__gallery">
                        <img 
                            src={'https://image.tmdb.org/t/p/original' + poster.poster_path} 
                            className="moviePosters"
                            onClick={() => {
                                if (likedMovies.find(movie => movie.id === poster.id)) {
                                this.handleUnlike(poster)
                                } else {
                                    this.handleLike(poster)
                                }
                            }}
                        />
                        <div className="liked" style={{backgroundColor: 'white'}}>
                            <img src={
                                    likedMovies?.find(movie => movie.id === poster.id) 
                                    ? likeImg : dontLikeImage
                                }
                            />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Cards;