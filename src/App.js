import React, { Component } from "react";
import Header from "./components/Header";
import tiles from "tiles.json"
import "./App.css";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    tiles
    score: 0,
    totalscore: 0
  };

  render() {
    return <>
    <Header />
    <Wrapper />
    <Tiles />
    </>
  }
}

export default App;
