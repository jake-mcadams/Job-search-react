import React from "react";
import CompanyAvatar from "./CompanyAvatar";
import ListingInfo from "./ListingInfo";
import ListCategories from "./ListingCategories";
import "../../styles/Mainsearch/components/JobListing.css";
import { listingProps } from "../../shared/interfaces/interfaces";

console.count("outside Job Listings component");

const JobListing = (props: listingProps) => {
  console.count("inside Job Listings component");
  return (
    <div id="listing__container">
      <div className="container_right">
        <CompanyAvatar logo={props.logo}></CompanyAvatar>
        <ListingInfo
          company={props.company}
          new={props.new}
          featured={props.featured}
          position={props.position}
          postedAt={props.postedAt}
          contract={props.contract}
          location={props.location}
        ></ListingInfo>
      </div>
      <div className="container_left">
        <ListCategories
          tools={props.tools}
          languages={props.languages}
          id={props.id}
        ></ListCategories>
      </div>
    </div>
  );
};

export default JobListing;
