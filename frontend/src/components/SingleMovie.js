import React from 'react';
import '../styles/SingleMovie.css'
import { Link } from 'react-router-dom'


export default function SingleMovie(props) {
    
    return (
        <div className='single-movie'>
            <div className='cont2'>
                <img src={require(`../uploads/${props.image.name}`)} />  
                <div className='movie-details'>
                    <div className='movie-info'>
                        <div className='movie-name'>{props.title}</div>
                        <div className='duration'>{props.durationH}h {props.durationM}min</div>
                        <div className='movie-cast'>Cast: {props.cast}</div>
                    </div>
                    <Link to={`/movies/${props._id}`} >
                        <div className='watch-bttn'>
                            <button>Watch</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}