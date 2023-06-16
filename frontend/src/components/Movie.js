import React from "react";
import '../styles/Movie.css';
import { Link } from 'react-router-dom'


export default function Movie(props) {
    return (
        <div className="card" >
            <img src={require(`../uploads/${props.image.name}`)} />
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">{props.title}</h5>
                <Link style={{ textDecoration: 'none' }} to={`/movies/${props._id}`}>
                    <div className="d-flex justify-content-center"><button>Watch</button></div>
                </Link>
            </div>
        </div>
    )
}