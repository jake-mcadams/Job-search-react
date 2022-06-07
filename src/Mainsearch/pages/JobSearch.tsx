import React, { FC } from "react";
import "../../styles/Mainsearch/pages/JobSearch.css";
import JobListing from "../components/JobListing";
import { listingProps } from '../../shared/interfaces/interfaces'
import data from  '../../data.json';


const testObj: listingProps = data[0];


const JobSearch = () => {
  return (
    <div className="search_conatainer">
      <JobListing company={testObj.company}
        logo={testObj.logo}
        new={testObj.new}
        featured={testObj.featured}
        position={testObj.position}
        role={testObj.role}
        level={testObj.level}
        postedAt={testObj.postedAt}
        contract={testObj.contract}
        location={testObj.location}
        languages={testObj.languages}
        tools={testObj.tools}></JobListing>
    </div>
  );
};

export default JobSearch;
