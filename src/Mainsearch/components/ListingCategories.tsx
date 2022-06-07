import React, { useState, useEffect } from "react";
import CategoryButton from "./CategoryButton";
import "../../styles/Mainsearch/components/ListingCategories.css";
import { listingProps } from "../../shared/interfaces/interfaces";

const ListCategories = (props: listingProps) => {
 
    const categoriesHandler = (tools: string[] | undefined, languages:string[] | undefined) => {
    const categoryItems: string[] = [];
    tools?.forEach((tool:any) => {
      categoryItems.push(tool);
    });
    languages?.forEach((language:any) => {
      categoryItems.push(language);
    });
    console.log(categoryItems)
  };

  categoriesHandler(props.tools, props.languages)

  return (
    <div id="categories__container">
      {/* {items.map((item) => {
        return <CategoryButton id={"1"}>{}</CategoryButton>;
      })} */}
    </div>
  );
};

export default ListCategories;
