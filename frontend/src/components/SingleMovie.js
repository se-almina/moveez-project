import React from 'react';
import '../styles/SingleMovie.css'

export default function SingleMovie(props) {
    return (
        <div className='single-movie'>
            <div className='container2'>
               <img src='https://occ-0-2774-590.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSRSAUYSehsJZ3RCLIwykk3xJH2hiVDUTcG6whNwt5eDCcsFcePHGLd8qWFYRbnOajeMa-Xt1iJIUmx4OUVbMkhCsLbeRx3mQiR5LvYVaoUNbnBAHNAqRzME.jpg?r=d98'/>
              <div className='movie-info'>
               <div className='movie-name'>{props.title}</div>
               <div className='duration'>{props.durationH}h {props.durationM}min</div>
               <div className='movie-cast'>Cast: {props.cast}</div>
               </div>
               <div className='watch-button'>
                <button>Watch</button>
               </div>
            </div>
        </div>
    )
}