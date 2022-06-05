import React, {FC} from 'react'
import { JsxElement } from 'typescript';
import '../../styles/Mainsearch/components/CategoryButton.css';

type Props = {
    children: React.ReactNode;
    id: string;
}

const CategoryButton =(props:Props)=>{
    return <>
        <button id={props.id} className='category_button'>{props.children}</button>
    </>
}

export default CategoryButton;