import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    let params = useParams()
    let id = params.id

    let [post, setPost] = useState({})
    let [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        // fetch(URL, options)
        // axios.get(URL,options)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(error => console.log(error))
            .finally(() => setTimeout(()=>{
                setLoading(false)
            },[3000]))
    }, [])

    return (
        <div className='w-1/2 p-10 shadow-xl mx-auto bg-slate-200 rounded-2xl'>
            {
                loading ?
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    : 
                    <>
                        <h1 className='text-center text-3xl font-bold underline'>{post.title}</h1>
                        <p className='text-2xl text-justify'>
                            {post.body}
                        </p>
                    </>

            }
        </div>
    )
}

export default Post