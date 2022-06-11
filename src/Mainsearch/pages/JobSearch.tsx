import React, {useState} from "react";
import "../../styles/Mainsearch/pages/JobSearch.css";
import JobListing from "../components/JobListing";
import ListingSearch from "../components/ListingSearch";
import data from "../../data.json";

console.count("outside Job Search component");

const JobSearch = () => {

  const [filter, enableFilter] = useState([])
  
  console.count("inside Job Search component");

  return (
    <div className="main_conatainer">
      <ListingSearch></ListingSearch>
      {data.map((item) => {
        return (
          <JobListing
            id={item.id}
            company={item.company}
            logo={item.logo}
            new={item.new}
            featured={item.featured}
            position={item.position}
            role={item.role}
            level={item.level}
            postedAt={item.postedAt}
            contract={item.contract}
            location={item.location}
            languages={item.languages}
            tools={item.tools}
          ></JobListing>
        );
      })}
    </div>
  );
};

export default JobSearch;
