import React, {FC} from 'react';
import CategoryButton from './CategoryButton';


const ListCategories:FC=()=>{
    return (
        <div id="categories__container">
            <CategoryButton>HTML</CategoryButton>
        </div>
    )
}

export default ListCategories;