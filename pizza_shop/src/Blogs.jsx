import React,{useState} from 'react'
import { Link } from "react-router-dom"
import callouts from "./Data/Blogs_data"
let calling= {...callouts}.data
console.log('calling hai ye',calling)
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from './components/Loader'
import Empty_message from './components/Empty_message'
import Loading_skeleton from './components/Loading/Skeleton_blog'

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


  
  export default function Blogs() {



    const [count, setcount] = useState(0)
const [items, setitems] = useState(calling.slice(0,6))
const [if_hasMore, setif_hasMore] = useState(true)
const  fetchMoreData = () => {

  if(items.length>=100){
    setif_hasMore(false)
    return;
  }
  setcount(count+1)
  setTimeout(() => {
   setitems(items.concat(calling.slice(6*count,6*count+6)))
  }, 1200);
  console.log(items)
};

    return (
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-8 sm:py-18 lg:pt-24 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">Blogs</h2>
  <Loading_skeleton num={9}/>
            <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={if_hasMore}
          loader={<Loader/>}
          scrollableTarget="scrollableDiv"
          endMessage={
          <Empty_message/>
          }
        >
           

         
              
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-y-8 lg:gap-x-6">
              {items.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.image}
                      alt='image'
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <Link to={callout.name.split(" ").join("_")}>
                      <span className="absolute inset-0" />
                      {callout.category}
                    </Link>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.name}</p>
                </div>
              ))}
              </div>
        </InfiniteScroll>
          </div>
        </div>
      </div>
    )
  }
  