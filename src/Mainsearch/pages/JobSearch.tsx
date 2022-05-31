import React, { FC } from "react";
import "../../styles/Mainsearch/pages/JobSearch.css";
import JobListing from "../components/JobListing";
import axios from "axios";

const JobSearch: FC = () => {

  // const listingsFetch = async()=>{
  //   try {
  //     const resObj = await axios({
  //       method: "get",
  //       url: 'http://localhost:5500/'
  //     }).then((data)=>{
  //       console.log(data)
  //     })
  //   } catch(err:any){
  //     console.log(err)
  //   }
  // }

  return (
    <div className="search_conatainer">
      <JobListing ></JobListing>
    </div>
  );
};

export default JobSearch;
