import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import Loader from '../components/Loader';

function AllPosts({numberOfPosts=Infinity,className=''}) {
    const [posts, setPosts] = useState([])
    const [isFetching,setIsFetching] = useState(true);
    useEffect(() => {
        setIsFetching(true);
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents.slice(0,numberOfPosts))
            console.log(posts)
        }
        
    }).finally(()=>{
        setIsFetching(false)
    })
    
}, [])

  return (
    <div className='w-full py-8'>
        {
                isFetching?(<div className='w-full flex justify-center items-center'>
                    <Loader/>
                </div>):
            (
        <Container>
            
            <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
                {posts.map((post) => (
                    <div key={post.$id} className='w-3/5 md:w-1/3 lg:w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>)}
    </div>
  )
}

export default AllPosts