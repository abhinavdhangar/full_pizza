import React from "react"
import ContentLoader from "react-content-loader"

const Loading_skeleton = (props) => (
 <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
   {Array(props.num).fill(0).map((e) =>(
 
  <ContentLoader 

    speed={2}
    width={337}
    height={324}
    viewBox="0 0 389 324"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-2" y="29" rx="13" ry="13" width="337" height="248" /> 
    <rect x="5" y="287" rx="0" ry="0" width="187" height="12" /> 
    <rect x="2" y="306" rx="0" ry="0" width="303" height="11" />
  </ContentLoader>
   ))}
  </div>
  )


export default Loading_skeleton

