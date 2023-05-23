import React, { useEffect } from "react";
import SingleMovie from "../components/SingleMovie";
import Movie from "../components/Movie";
import '../styles/Home.css';

export default function Home() {
    const [movie, setMovie] = React.useState([]);
    const [allmovies, setAllMovies] = React.useState([]);


    useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch('https://moveez-r9ei.onrender.com/movies/singlemovie')
            const data = await response.json()

            if (response.ok) {
                setMovie(data)
            }
        }

        const fetchMovies = async () => {
            const response = await fetch('https://moveez-r9ei.onrender.com/movies/')
            const data = await response.json()

            if (response.ok) {
                setAllMovies(data)
            }
        }

        fetchMovie();
        fetchMovies();


    }, [])

    const singlemovie = movie.map(movie => {
        return (
            <SingleMovie
                key={movie.id}
                {...movie}
            />
        )
    })

    const movies = allmovies.map(movie => {
        return (
            <Movie
                key={movie.id}
                {...movie}
            />
        )
    })


    return (
        <div>
            {singlemovie}
            <div className="allmovies">
                {movies}
            </div>
        </div>

    )
}