import React, { useEffect } from "react";
import SingleMovie from "../components/SingleMovie";

export default function Home() {
    const [movies, setMovies]=React.useState([]);


    useEffect(() => {
        const fetchMovies = async () => {
          const response = await fetch('/movies/singlemovie')
          const data = await response.json()
    
          if (response.ok) {
            setMovies(data)
          }
        }
    
        fetchMovies()
        console.log(movies)
    
    }, [])

        const singlemovie=movies.map(movie => {
            return (
                <SingleMovie
                key={movie.id}
                {...movie}
                />
            )
        })

  
    return (
        <div>
            {singlemovie}
        </div>
        
    )
}