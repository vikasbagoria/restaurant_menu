import React, { useState } from 'react';
import Menu from "./Menu";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { MenuItems } from '../src/components/MenuItems';
import { CatMenu } from '../src/components/CatMenu';

const allCatValues = [...new Set(Menu.map((curElem)=> curElem.category)), "all"]

const GalleryReact = () => {

    const [items, setItems] = useState(Menu);
    const [catItems, setCatItems] = useState(allCatValues);
    
    const filterItem = (category) => {

        if(category==="all"){
            setItems(Menu);
            return;
        }

        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === category;
        });

        setItems(updatedItems);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr />
            <CatMenu  filterItem={filterItem} catItems={catItems} />  
            
            <MenuItems items={items} />
        </>
    )
}

export default GalleryReact;