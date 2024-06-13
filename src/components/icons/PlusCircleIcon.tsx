import React from "react";


interface Props {
  color: string;
  fill: string;
}


const PlusCircleIcon = ({color, fill} : Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <g strokeWidth="1.5" clipPath="url(#clip0_2899_7126)">
        <circle
          cx="8.001"
          cy="8"
          r="6.667"
          fill={fill}
          stroke={color}
        ></circle>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 5.333v5.334M5.335 8h5.333"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2899_7126">
          <path fill="#fff" d="M0 0H16V16H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default PlusCircleIcon;