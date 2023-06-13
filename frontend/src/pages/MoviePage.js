import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/MovieDetails.css';
import { Link } from 'react-router-dom'



export default function MoviePage(props) {

    const [movie, setMovie] = React.useState([]);
    const { id } = useParams();



    useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch(`https://moveez-r9ei.onrender.com/movies/${id}`)
            const data = await response.json()

            if (response.ok) {
                setMovie(data)
            }
        }
        fetchMovie();


    }, []);




    return (
        <div className="moviedetails">
            <div>
                <h4>{movie.title}</h4>
                <p><strong>Director: </strong>{movie.director}</p>
                <p><strong>Cast: </strong>{movie.cast}</p>
                <p><strong>Duration: </strong>{movie.durationH}h {movie.durationM}min</p>
                <Link to="/order" state={movie}>
                    <div className='watchbttn'>
                        <button><strong>Projection: </strong>{movie.dateAndTimeOfProjection}</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}