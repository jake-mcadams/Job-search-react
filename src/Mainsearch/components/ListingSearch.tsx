import React, { useState } from "react";
import "../../styles/Mainsearch/components/ListingSearch.css";
import "../../styles/Mainsearch/components/ListingSearch.css";
import { listingProps } from "../../shared/interfaces/interfaces";
import "./CategoryButton";
import CategoryButton from "./CategoryButton";



const ListingSearch = (props:listingProps) => {

  const clearSearchHandler=()=>{
    console.log('clicked clearSearch')
    props.clearFilter?.()
  }
const searchItems:string[]=[]
  console.log(props.filter?.length)
  // console.log(props.filter?.join(""))
  console.log(props.filter)
props.filter?.forEach((item)=>{
  searchItems.push(item)
})
console.log(`search Items ${searchItems}`)

  if(props.filter!.length >0){
    return (
      <div className="search__container ">
        <div className="search__items">
          <CategoryButton key={props.id} id="1">{props.filter}</CategoryButton>
        </div>
        <div className="search__clear" onClick={()=>clearSearchHandler()}>Clear</div>
      </div>
    );
  }else{
    return null;
  }
};

export default ListingSearch;
