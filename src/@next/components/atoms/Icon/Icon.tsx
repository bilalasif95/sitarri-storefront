import React from "react";

// import { icons } from "./definitions";
import { IProps } from "./types";

// const getPathColor = (color: string | string[], index: number) => {
//   if (typeof color === "string") {
//     return color;
//   }

//   return color[index] ? color[index] : "inherit";
// };

export const Icon: React.FC<IProps> = ({ size = 32, color, name }: IProps) => {
  // const icon = icons[name];
  return (
    // <svg height={size} viewBox="0 0 32 32" width={size}>
    // {icon &&
    //   icon.map((path, index) => (
    //   <path
    //     d={path.d}
    //     fill={color ? getPathColor(color, index) : path.fill}
    //     key={index}
    //   />
    //   ))}
    // </svg>
    <svg width="10" height="8" xmlns="https://www.w3.org/2000/svg">

 <g>
  <title>background</title>
  <rect fill="none" id="canvas_background" height="602" width="802" y="-1" x="-1"/>
 </g>
 <g>
  <title>Layer 1</title>
  <path id="svg_1" fill="#000000" d="m5,8l-4.33013,-7.5l8.66026,0l-4.33013,7.5z"/>
 </g>
</svg>
  );
};
