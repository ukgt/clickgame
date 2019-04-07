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
    totalscore: 0,
  };
  
  
  //   need logic here -
// this.handleClick = this.handleClick.bind(this)
//   handleClick(id) {
//     this.setState(prevState => ({
//       ...prevState,
//       image: prevState.images.map(image => ({
//         ...image,
//         like: image.id === id ? image.like - 1 : image.like
//      }))
//     }))
//   }

handleClick = (id) => {
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
          {this.state.images.map(image => (
            <Tiles
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
             
              
              />
              ))}
        </Wrapper>
      </>
    );
  }
}

export default App;
