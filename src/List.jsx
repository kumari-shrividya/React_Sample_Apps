import React,{useState,useEffect} from 'react'

const List=()=>{

    const [data,setData]=useState([])

     useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data=>setData(data))
        .catch(error=>console.log(error))
     }
     ,[])

    return(
        <div>
            <h2>List of Posts</h2>
            <ul>
                {data.map((item=>
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))  
                    
                }
            </ul>

        </div>
     
    )
}
export default List