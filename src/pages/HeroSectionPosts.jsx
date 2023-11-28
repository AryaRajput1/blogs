import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import FeaturedBlogs from '../components/FeaturedBlogs';

function HeroSectionPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
}, [])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap md:flex-row justify-center flex-col gap-4'>
                {posts?.slice(0,3).map((post) => (
                    <div key={post.$id} className='rounded-lg lg:w-1/4 md:w-2/4 w-full sm:w-1/3'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default HeroSectionPost