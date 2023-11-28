import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/config";

function FeaturedBlogs() {
    const [posts, setPosts] = useState([])
    const [isFetching,setIsFetching] = useState(true);
    useEffect(() => {
        setIsFetching(true);
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            console.log(posts);
            setPosts(posts.documents)
        }
        
    }).finally(()=>{
        setIsFetching(false)
    })
},[])

const latestPost=(posts)=>{
    console.log('me posts hu',posts)
    return posts?.sort((a,b)=>b.$updatedAt-a.$updatedAt)?.slice(0,5)
}
  return (
    <div className='gap-4 p-7 flex-col flex m-3'>
        {
          latestPost(posts)?.map((post,index)=>(<div key={index} className='flex gap-4'>
            <h3 className='text-5xl font-semibold text-gray-300'>0{index+1}</h3>
            <div className=''>
                <h2 className='text-md font-bold capitalize break-words'>{post?.title}</h2>
                <div className='mt-2'>
                <p className='text-sm font-medium text-gray-500'>Arya Rajput</p>
                <p className='mt-1 text-xs font-medium text-gray-400'>Mar 20 - 5 Min read</p>
                </div>
            
            </div>
            
          </div>))  
        }
    </div>
  )
}
export default FeaturedBlogs
