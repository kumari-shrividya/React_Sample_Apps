import {data} from './data.js'

import{useState } from 'react'

const CategoryList=()=>{

    return(
       <div>
         {
            data.map(item=>(
                
                <div key={item.id}>
                    <h3>{item.category}</h3>
                    <ul>
                        {
                            item.items.map(it=>
                                <li key={it}>{it}</li>
                            )
                        }
                    </ul>
                </div>
            ))
         }
       </div>
    )
}
export default CategoryList