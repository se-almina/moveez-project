import React from 'react';
import '../styles/SingleMovie.css'
import { Link } from 'react-router-dom'


export default function SingleMovie(props) {
    return (
        <div className='single-movie'>
            <div className='cont2'>
                <img src='https://occ-0-2774-590.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSRSAUYSehsJZ3RCLIwykk3xJH2hiVDUTcG6whNwt5eDCcsFcePHGLd8qWFYRbnOajeMa-Xt1iJIUmx4OUVbMkhCsLbeRx3mQiR5LvYVaoUNbnBAHNAqRzME.jpg?r=d98' />
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