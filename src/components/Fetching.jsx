import React, { useEffect, useState } from 'react'



function Fetching() {
    const [post, setPost] = useState({})
    const [id,setId] = useState(1)
    const[idFromButtonClick ,setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    
    useEffect(()=>{
        fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
           .then(response => response.json())

           .then(data => {
              console.log(data);
              setPost(data)
           } )  
    },[idFromButtonClick ])

    return (
        <div>
            <input type="text" value={id} onChange={ e => setId(e.target.value) }/>
            <button type="button" onClick={handleClick}>Fetch Post</button>
             <div>{post.title}</div>
            {/* <ul>
               {post.map(post => (
                   <li key ={post.id} value={id} >{post.title}</li>
               ))}
            </ul> */}
        </div>
    )
}

export default Fetching
