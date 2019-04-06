import React from "react";
import "./Tiles.css";


const Tiles = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.id} src={props.image} />

      <span handleClick={() => props.handleClick(props.id)} className="images" />
    </div>
  </div>
); 


export default Tiles;