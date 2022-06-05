import React, { FC } from "react";
import CompanyAvatar from "./CompanyAvatar";
import ListingInfo from "./ListingInfo";
import ListCategories from "./ListingCategories";
import '../../styles/Mainsearch/components/JobListing.css';
import { listingProps } from '../../shared/interfaces/interfaces';

const JobListing = (props:listingProps) => {
  return (
    <div id="listing__container">
      <div className="container_right">
        <CompanyAvatar></CompanyAvatar>
        <ListingInfo></ListingInfo>
      </div>
      <div className="container_left">
        {/* <ListCategories></ListCategories> */}
      </div>
    </div>
  );
};

export default JobListing;
