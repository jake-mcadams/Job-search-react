import React from "react";
import "../../styles/Mainsearch/components/ListingInfo.css";
import { listingProps } from "../../shared/interfaces/interfaces";

console.count("outside Listings Info component");

const ListingInfo = (props: listingProps) => {
  console.count("inside Listings Info component");

  return (
    <div id="info__container">
      <div className="info__row">
        <div id="info__company">{props.company}</div>
        {props.new ? (
          <div id="info__new" className="listing__status">
            NEW!
          </div>
        ) : null}
        {props.featured ? (
          <div id="info__featured" className="listing__status">
            FEATURED
          </div>
        ) : null}
      </div>
      <div className="info__row">
        <div id="info__position">{props.position}</div>
      </div>
      <ul id="info__misc_list" className="info__row">
        <li id="info__days" className="listing__misc">
          {props.postedAt}
        </li>
        <li id="info__contract" className="listing__misc">
          {props.contract}
        </li>
        <li id="info__location" className="listing__misc">
          {props.location}
        </li>
      </ul>
    </div>
  );
};

export default ListingInfo;
