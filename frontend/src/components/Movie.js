import React from "react";
import '../styles/Movie.css';

export default function Movie(props) {
    return (
        <div class="card" >
         <img src='https://occ-0-2774-590.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSRSAUYSehsJZ3RCLIwykk3xJH2hiVDUTcG6whNwt5eDCcsFcePHGLd8qWFYRbnOajeMa-Xt1iJIUmx4OUVbMkhCsLbeRx3mQiR5LvYVaoUNbnBAHNAqRzME.jpg?r=d98'/>        <div class="card-body">
          <h5 class="card-title d-flex justify-content-center">{props.title}</h5>
          <div className="d-flex justify-content-center"><button>Watch</button></div>
        </div>
        </div>
    )
}