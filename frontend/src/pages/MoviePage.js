import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MoviePage(props) {

    const [movie, setMovie] = React.useState([]);
    const { id } = useParams();



    useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch(`/movies/${id}`)
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
                <div>{movie.title}</div>
            </div>
        </div>
    )
}