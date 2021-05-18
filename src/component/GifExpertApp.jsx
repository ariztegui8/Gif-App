import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = ()=>{
    //     setCategories([...categories, 'Vegeta']);
    // }


    return (
        <div>
            <h2 className="title">GIF APP</h2>
            <AddCategory setCategories={setCategories}/>
        

            
            <ul>
                {
                    categories.map(category =>(
                        <GifGrid
                            key={category}
                            category={category}/>
                    )) 
                }
            </ul>



           
        </div>
    )
}

export default GifExpertApp
