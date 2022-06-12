import React, { useState } from "react";
import "../../styles/Mainsearch/components/CategoryButton.css";
import { listingProps } from "../../shared/interfaces/interfaces";

// console.count("outside Category Button component");

const CategoryButton = (props: listingProps) => {
  // console.count("inside Category Button component");
  const [newSearch, setNewSearch] = useState<string[]>([]);

  const onClickHandler = (e: any) => {
    // setNewSearch(prev => {
      // console.log(e)
      // console.log(typeof(e))
      // console.log(`previous state ${prev}`)
      // console.log(`previous state ${typeof(prev)}`)
      // return [e]
    // })
    setNewSearch([e])
    console.log(`New search ${newSearch}`);
    props.updateFilter?.(newSearch);
  };
  return (
    <>
      <button
        key={props.id}
        id={props.id}
        onClick={() => onClickHandler(props.children)}
        className="category_button"
      >
        {props.children}
      </button>
    </>
  );
};

export default CategoryButton;
