import React, {useState} from "react";
import "../../styles/Mainsearch/pages/JobSearch.css";
import JobListing from "../components/JobListing";
import ListingSearch from "../components/ListingSearch";
import data from "../../data.json";
// import { listingProps } from "../../shared/interfaces/interfaces";

// console.count("outside Job Search component");

const JobSearch = () => {
  const [filter, setFilter] = useState<string[]>(['HTML']);
  
  const clearSearchHandler=()=>{
    console.log('clear has been clicked')
    setFilter([])
  }

  const onUpdateSearch=(v:string[])=>{
    console.log(`inside updatesearch before filter update ${typeof(v)}`)
    console.log(v)
    setFilter([...v])
  }
 
  
  // console.count("inside Job Search component");

  return (
    <div className="main_conatainer">
      <ListingSearch clearFilter={clearSearchHandler} filter={filter} ></ListingSearch>
      {data.map((item) => {
        return (
          <JobListing
            id={item.id.toString()}
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
            updateFilter={onUpdateSearch}
          ></JobListing>
        );
      })}
    </div>
  );
};

export default JobSearch;
