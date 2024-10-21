import React, { useState } from 'react';

const DropDown = () => {

    const data = [
        { category: "fruits", items: ["banana", "apple", "orange"] },
        { category: "vegetables", items: ["onion", "brinjal", "carrot"] }
    ];

    return(
        <div>
            <select style={{margin:'10px' , width:'150px', height:'30px'}}>

                <option>select Category</option>
                {
                    data.map(item=>(
                        <option>{item.category} </option>
                    )
                    )
                }
                <option>Veg</option>
            </select>
        </div>
    )


}
export default DropDown