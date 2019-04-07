import React from "react";
import "./Tiles.css";


// const Tiles = props => (
  
// ); 

 function Tiles(props) {
    return <div className="row">{props.children}
   
    <div className="col-mid-3" />

    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} />

        <div onClick={() => props.handleClick(props.id)} className="images" />
      </div>
    </div>
  </div>
  
  };
export default Tiles;