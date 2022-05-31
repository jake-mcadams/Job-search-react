import React from "react";
import "./styles/App.css";
import MainHeader from "./shared/components/Navigation/MainHeader";
import JobSearch from "./Mainsearch/pages/JobSearch";

const App = () => {
  return (
    <>
      <MainHeader />
      {/* <h1 id="hello">Hello World!</h1> */}
      <JobSearch></JobSearch>
    </>
  );
};

export default App;
