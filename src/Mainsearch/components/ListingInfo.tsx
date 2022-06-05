import React from "react";
import '../../styles/Mainsearch/components/ListingInfo.css';

const ListingInfo = () => {
  return (
    <div id="info__container">
      <div className="info__row">
        <div id="info__company">Photosnap</div>
        <div id="info__new" className="listing__status">NEW!</div>
        <div id="info__featured" className="listing__status">FEATURED</div>
      </div>
      <div className="info__row">
          <div id="info__title">Senior Frontend Developer</div>
      </div>
          <ul id="info__misc_list" className="info__row">
              <li id="info__days" className="listing__misc">1d ago</li>
              <li id="info__position" className="listing__misc">Full Time</li>
              <li id="info__location" className="listing__misc">USA only</li>
          </ul>
    </div>
  );
};

export default ListingInfo;
