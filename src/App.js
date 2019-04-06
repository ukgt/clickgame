import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Tiles from "./components/Tiles";
import images from "./imgFiles.json";

class App extends Component {
  state = {
    images,
    score: 0,
    totalscore: 0
  };

 
  //   need logic here -
 

handleClick = () => {
this.setState(prevState => {
  return { score: prevState.score + 1}
})
 }
  // logic for score

  render() {
    return (
      <>
        <Header  score={this.state.score} totalscore={this.state.totalscore}/>
        <Wrapper>
          {this.state.images.map(pineapple => (
            <Tiles
              id={pineapple.id}
              key={pineapple.id}
              name={pineapple.name}
              image={pineapple.image}
            />
          ))}
        </Wrapper>
      </>
    );
  }
}

export default App;
