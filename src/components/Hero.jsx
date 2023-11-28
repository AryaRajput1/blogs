import { Link } from "react-router-dom"
import HeroSectionPost from "../pages/HeroSectionPosts"
import FeaturedBlogs from "./FeaturedBlogs"
import AllPosts from "../pages/AllPosts"
import SubscribeComp from "./SubscribeComp"
import { useSelector } from "react-redux"

function Hero() {
  const authStatus = useSelector(state => state.auth.status)
  return (
    <div className="lg:min-h-screen lg:m-0 my-auto">
    <section className="bg-white dark:bg-gray-900 relative lg:rounded-none">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <Link to="/" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-primary-600 rounded-full text-gray-900 px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Blogsite! Create what's in your MIND</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        </Link>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Explore, Inspire, Discover, Share, Thrive.</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Elevate Your Mind, Ignite Your Passion: Journey Through Words on Blogsite.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to="/add-post" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                How to start
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
            <Link to="/add-post" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  width="25"
  height="25"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="6" y="6" width="12" height="12" rx="2" ry="2" />
  <line x1="12" y1="10" x2="12" y2="14" />
  <line x1="10" y1="12" x2="14" y2="12" />
</svg>

                Add a Post
            </Link>  
        </div>
    </div>
    <div className="lg:block hidden lg:absolute lg:-bottom-[300px] lg:inset-x-0 ">
</div>
</section>
{authStatus &&(<div className="flex md:flex-row flex-col w-full">
  <div className="md:w-2/4 lg:w-3/4 w-full">
    <div className="flex justify-center m-4 flex-col items-center w-full">
    <h3 className="text-xl font-medium">Recent Posts</h3>
    <div className="w-32 h-1 bg-gray-900"></div>
    </div>
    <AllPosts numberOfPosts={2} className='gap-7'/>
  </div>
  <div className="md:w-2/4 lg:w-1/4 w-full flex flex-col justify-center">
    <SubscribeComp/>
<FeaturedBlogs/>

  </div>
</div>)}
{!authStatus && (
  <div className="flex justify-center">
    <div className="w-full md:w-2/4">
  <SubscribeComp/>
  </div>
  </div>
)}
</div>

  )
}

export default Hero