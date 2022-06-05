import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import '../../styles/Mainsearch/components/ListingCategories.css';
import { Categories } from '../../shared/interfaces/interfaces';

const ListCategories = (props: Categories) => {
  const [items, setItems] = useState([])
  // const categoriesItems: string[] = ["HTML", "CSS", "JavaScript"];
  const categoriesItems = props.languages

  

  // setItems(categoriesItems);

  return (
    <div id="categories__container">
      {items.map((item) => {
        return <CategoryButton id={"1"}>{item}</CategoryButton>;
      })}
    </div>
  );
};

export default ListCategories;
