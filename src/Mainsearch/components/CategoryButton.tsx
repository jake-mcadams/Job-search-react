import React, { FC } from "react";
import "../../styles/Mainsearch/components/CategoryButton.css";

console.count("outside Category Button component");

type Props = {
  children: React.ReactNode;
  id: string;
};

const CategoryButton = (props: Props) => {
  console.count("inside Category Button component");
  return (
    <>
      <button id={props.id} className="category_button">
        {props.children}
      </button>
    </>
  );
};

export default CategoryButton;
