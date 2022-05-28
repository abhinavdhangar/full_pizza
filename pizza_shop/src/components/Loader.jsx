import React,{useEffect,useRef} from 'react'

import loader from '../json/fireworks.json'
import { Player } from "@lottiefiles/react-lottie-player";

const Loader = () => {
  

  return (
//     <div className='overflow-y-hidden flex item-center justify-center h-24'>
//  <div style={{borderTopColor: 'transparent'}} className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin" />
//     </div>


<div className='flex items-center justify-center'>
<Player 

autoplay
loop
src={loader}
style={{ height: "200px", width: "200px"}}
/>
</div>

)
}

export default Loader