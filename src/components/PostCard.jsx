import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import parse from 'html-react-parser';

function PostCard({$id, title,content, featuredImage,$createdAt,createdAt="25 June 2023",type='primary'}) {

  function calculateReadingTime(text, wordsPerMinute = 200) {
    // Estimate words in the text based on average word length
    const words = text.split(/\s+/).length;
  
    // Calculate reading time in minutes
    const readingTime = Math.ceil(words / wordsPerMinute);
  
    return readingTime;
  }
const inputDate = new Date($createdAt);

const formattedDate = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric'
}).format(inputDate);

    
  return (
    // <Link to={`/post/${$id}`} className='hover:border-none'>
      <article className="shadow-xl hover:scale-105 duration-200  flex flex-col rounded-xl ">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img className="object-cover w-full h-52 dark:bg-gray-500 rounded-t-lg" src={appwriteService.getFilePreview(featuredImage)} alt={title} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<Link to={`/post/${$id}`} rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline dark:text-pink-400 font-medium">Category</Link>
					<h3 className="text-black flex-1 py-2 text-lg font-semibold leading-1 font-sans capitalize font-semibold">{title}</h3>
          <p className='text-sm text-gray-500 font-medium'>{parse(content?.slice(0,50))}</p>
          <Link className='underline font-medium text-blue-700' to={`/post/${$id}`}>Read More...</Link>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>{formattedDate.replace(/\s/g, ' ')} | {calculateReadingTime(content)} Min. Read
            </span>
					</div>
				</div>
			</article>
    // </Link>
  )
}


export default PostCard