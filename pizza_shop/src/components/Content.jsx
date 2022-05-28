import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import callouts from "../Data/Blogs_data";
let calling = {...callouts}.data

export default function Content() {
  const {id} = useParams()
  const [le, setlet] = useState({})

useEffect(() => {
  calling.forEach(e=>{
    if(e.href==id){
      setlet(e)
      console.log(e)
console.log(le)
    }
  })
}, [])

console.log(le)
  return (
    <>
      <div>
        <div className="dark:bg-gray-900">
          <div className="mx-auto container w-full flex items-center md:flex-row flex-col justify-between px-6 lg:px-0">
            <div className="flex flex-col justify-start items-start lg:w-2/5 px-2 lg:px-0">
              <div>
                <p className="lg:text-sm text-xs text-gray-600 dark:text-gray-300 font-medium leading-none">{le.category}</p>
              </div>
              <div className="md:mt-3">
                <p className="text-gray-800 dark:text-white lg:text-4xl text-3xl font-extrabold leading-9">{le.name}</p>
              
              
              
             
                 
               
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0">
              <img className="w-full" src={le.image} alt={le.name} />
            </div>
          </div>
          <div className="mx-auto container w-full flex xl:flex-row flex-col justify-between items-start mt-12 px-6 lg:px-0">
            <div className="flex flex-col justify-start items-start xl:w-2/4">
              <div>
                <h2 className="text-gray-800 dark:text-white lg:text-3xl text-2xl font-bold leading-7">The details</h2>
              </div>
              <div className="mt-8">
                <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                 {le.para}
                </p>
              </div>
              <div className="mt-8 w-full">
                <img className="w-full" src="https://i.ibb.co/181DvLN/Project-Cover-6.png" alt="image" />
              </div>
              <div className="mt-8 flex justify-start items-start flex-col">
                <div>
                  <p className="text-gray-800 dark:text-white lg:text-base text-sm font-semibold leading-none">Breakdown of milestones</p>
                </div>
                <div className="text-gray-800 dark:text-white mt-4 lg:text-base text-sm leading-normal">
                  <ul>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>Mauris ullamcorper neque sed mauris gravida, vel mollis velit molestie.</div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>Donec iaculis erat in vulputate venenatis.</div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>Vestibulum et velit et metus commodo iaculis.</div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>Sed et urna a felis accumsan commodo vel vel nibh.</div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>Praesent sollicitudin nulla non sollicitudin varius.</div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>Integer convallis orci sed diam volutpat feugiat.</div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">- Donec posuere arcu non semper maximus.</li>
                  </ul>
                </div>
                <div className="mt-8 flex-col justify-start items-start">
                  <div>
                    <img className="w-full" src="https://i.ibb.co/S7LSZpk/Rectangle-45.png" alt="girl" />
                  </div>
                  <div className="mt-8">
                    <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                      Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create
                      a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:px-8 px-4 md:px-0 lg:px-16 mt-10 xl:mt-0 h-full xl:w-2/5 w-full flex justify-center items-center bg-gradient-to-l from-indigo-600 to-indigo-700">
              <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center my-10">
                <div>
                  <p className="md:text-2xl text-lg font-semibold text-center lg:text-left leading-normal text-white">Get Webber for your organization</p>
                </div>
                <div className="mt-8">
                  <p className="md:text-base text-xs text-center lg:text-left leading-normal text-white">If you're looking for random facts, you've arrived at the correct webpage. The Random Fact Generator has thousands of facts ready to be revealed with a simple click of a mouse.</p>
                </div>
                <div className="mt-8 flex flex-row justify-start items-center space-x-4">
                  <div className>
                    <button className="btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 bg-white rounded-sm text-indigo-700 hover:bg-gray-100">Start trial</button>
                  </div>
                  <div className>
                    <button className="btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 text-white rounded-sm hover:bg-white hover:text-indigo-700">Contact sales</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </>

  );
}
