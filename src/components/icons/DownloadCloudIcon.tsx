import React from "react";

interface Props {
    color: string;
}

const DownloadCloudIcon = ({color} : Props) => {
  return (
    <svg
      width="17"
      height="16"
      fill="none"
      viewBox="0 0 17 16"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.167 10.828a3 3 0 011.386-5.482 4.001 4.001 0 017.894 0 3 3 0 011.387 5.482m-8 .505L8.501 14m0 0l2.666-2.667M8.501 14V8"
      ></path>
    </svg>
  );
}

export default DownloadCloudIcon;