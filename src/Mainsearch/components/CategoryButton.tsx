import React, {FC} from 'react'
import { JsxElement } from 'typescript';
import '../../styles/Mainsearch/components/CategoryButton.css';

type Props = {
    children: React.ReactNode;
}

const CategoryButton =(props:Props)=>{
    return <>
        <button className='category_button'>{props.children}</button>
    </>
}

export default CategoryButton;