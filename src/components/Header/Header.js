import React from "react";
import "./Header.css";


const Header = props => (
     <div className= "header">
     <div className="title">Memory Game: Click on a tile just once to score.  {props.children}</div>
     <div className="score">Score: {props.score} 
     TotalScore: {props.totalscore}
     </div>
     </div>
     
    
);
     



export default Header;