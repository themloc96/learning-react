import React from "react";
import { Svgs } from "../../apis/dashboard/svgs"

const SVG = ({svgID, path1, path2, path3, fill3, fill1, fill2, fill4, path4, fill5, path5, fill6, path6, fill7, path7, fill8, path8, width, height, viewBox} : Svgs) => {
  return (
    
    <svg 
      // id={svgID}
      width={32}
      height={32} 
      viewBox={"0 0 32 32"} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"> 
      <path d={path1} fill={fill1} />
      <path fillRule="evenodd" clipRule="evenodd" d={path2} fill={fill2} />
      <path d={path3} fill={fill3} />
      <path d={path4} fill={fill4} />
      <path d={path5} fill={fill5} />
      <path d={path6} fill={fill6} />
      <path d={path7} fill={fill7} />
      <path d={path8} fill={fill8} />
    </svg>
  )
}

export default SVG;
