import React from "react";
import "../../styles/Mainsearch/components/JobListing.css";
import { listingProps } from "../../shared/interfaces/interfaces";

const CompanyAvatar = (props: listingProps) => {
  return (
    <>
      <img src={`/images/${props.logo}`} alt="" />
    </>
  );
};

export default CompanyAvatar;
