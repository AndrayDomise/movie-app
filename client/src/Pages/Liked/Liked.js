import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../Components/Header/Header'
import Cards from '../../Components/Cards/Cards'
import axios from 'axios';

const Liked = ({}) => {

    const [likedMovies, setLikedMovies] = useState([]);

    const getLiked = useCallback(() => {
        axios.get('http://localhost:8080/liked')
        .then(res => {
            setLikedMovies(res.data);
        });
    }, []);
    useEffect(() => getLiked(), []);

    return (<div>
        <Header />
        <Cards posters={likedMovies} />
    </div>)
}

export default Liked;