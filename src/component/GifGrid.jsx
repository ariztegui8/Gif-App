import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {


    const {data, loading} = useFetchGifs(category);
    


return (
   <>
    <h3 className="animate__animated animate__bounce">{category}</h3>

    {loading && <p className="loading animate__animated animate__flash">Loading...</p>}

    <div className="card-grid">
    
            {
                data.map(img => (
                    <GifGridItem
                    key={img.id}
                    {...img}
                    />
                ))
            }
    </div>
   </>
 )
}

export default GifGrid