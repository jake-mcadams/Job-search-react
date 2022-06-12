import React, { useState, useEffect } from "react";
import CategoryButton from "./CategoryButton";
import "../../styles/Mainsearch/components/ListingCategories.css";
import { listingProps } from "../../shared/interfaces/interfaces";

// console.count("outside Listing Categories component");

const ListCategories = (props: listingProps) => {
  const categoryItems: string[] = [];
  if (props.tools) {
    props.tools?.forEach((tool) => {
      categoryItems.push(tool);
    });
  }
  if (props.languages) {
    props.languages?.forEach((lang) => {
      categoryItems.push(lang);
    });
  }


  
  // console.count("inside Listing Categories component");

  return (
    <div id="categories__container">
      {categoryItems.map((items) => {
        // console.log(`Items Array ${categoryItems}`)
        // console.log(`Items Array type ${typeof(categoryItems)}`)
        // console.log(`Mapped items ${items}`)
        // console.log(`Mapped items type ${typeof(items)}`)
        return (
          <CategoryButton key={props.id} updateFilter={props.updateFilter} id={props.id!.toString()}>
            {items}
          </CategoryButton>
        );
      })}
    </div>
  );
};

export default ListCategories;
