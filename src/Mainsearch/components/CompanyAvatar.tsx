import React from "react";
import "../../styles/Mainsearch/components/JobListing.css";
import { listingProps } from "../../shared/interfaces/interfaces";

console.count("outside Company Avatar component");

const CompanyAvatar = (props: listingProps) => {
  console.count("inside Company Avatar component");
  return (
    <>
      <img src={`/images/${props.logo}`} alt="" />
    </>
  );
};

export default CompanyAvatar;
