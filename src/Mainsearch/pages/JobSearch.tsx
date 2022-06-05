import React, { FC } from "react";
import "../../styles/Mainsearch/pages/JobSearch.css";
import JobListing from "../components/JobListing";
import { listingProps } from '../../shared/interfaces/interfaces'

const JobSearch = () => {
  return (
    <div className="search_conatainer">
      {/* <JobListing company={props.company}
        logo={props.logo}
        new={props.new}
        featured={props.featured}
        position={props.position}
        role={props.role}
        level={props.level}
        postedAt={props.postedAt}
        contract={props.contract}
        location={props.location}
        languages={props.languages}
        tools={props.tools}></JobListing> */}
    </div>
  );
};

export default JobSearch;
