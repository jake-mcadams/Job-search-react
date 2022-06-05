import React, { useState, useEffect } from "react";
import "./styles/App.css";
import MainHeader from "./shared/components/Navigation/MainHeader";
import JobSearch from "./Mainsearch/pages/JobSearch";
import { listingProps } from './shared/interfaces/interfaces'

const App = () => {
  const [result, setResult] = useState({});

  useEffect(() => {
    listingFetch();
    processResult(result)
  }, []);

  const listingFetch = (): any => {
    const myHeaders = new Headers({
      "Content-Type": "application/json",
    });

    const myRequest = new Request("http://localhost:5500/", {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
    });

    fetch(myRequest).then((response) => {
      if (!response.ok) {
        throw new Error("Network not ok");
      }
      return response.json().then((data) => {
        setResult(data as listingProps);
      });
    });
  };

const processResult=(result:listingProps)=>{
  Object.keys(result).forEach((item)=>{
    console.log(result[parseInt(item)])
  })
}



  return (
    <>
      <MainHeader />
      <JobSearch
        // company={result.company}
        // logo={result.logo}
        // new={result.new}
        // featured={result.featured}
        // position={result.position}
        // role={result.role}
        // level={result.level}
        // postedAt={result.postedAt}
        // contract={result.contract}
        // location={result.location}
        // languages={result.languages}
        // tools={result.tools}
        // {...result}
      ></JobSearch>
    </>
  );
};

export default App;
