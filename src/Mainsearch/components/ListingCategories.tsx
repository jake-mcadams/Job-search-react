import React, { useState, useEffect } from "react";
import CategoryButton from "./CategoryButton";
import "../../styles/Mainsearch/components/ListingCategories.css";
import { listingProps } from "../../shared/interfaces/interfaces";
import { count } from "console";

console.count("outside Listing Categories component");

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
  // console.log(categoryItems)
  console.count("inside Listing Categories component");

  return (
    <div id="categories__container">
      {categoryItems.map((items) => {
        return (
          <CategoryButton key={props.id} id={props.id!.toString()}>
            {items}
          </CategoryButton>
        );
      })}
    </div>
  );
};

export default ListCategories;
