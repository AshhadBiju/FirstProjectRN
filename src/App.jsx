import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RawPost from "./Components/RawPost/RawPost";
import { action, originals, trending } from "./urls";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RawPost urls={originals} title="Netflix Originals" />
      <RawPost urls={action} title="Action" isSmall />
      <RawPost urls={trending} title="Trending" isSmall />
    </div>
  );
}

export default App;
