import React from "react";

interface Props {
    color: string;
}

const Edit03Icon: React.FC<Props> = (props) => {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 13.333h6m-12 0h1.116c.326 0 .49 0 .643-.036.136-.033.266-.087.385-.16.135-.082.25-.198.48-.428L13 4.333a1.414 1.414 0 10-2-2L2.625 10.71c-.23.23-.346.346-.429.48-.073.12-.127.25-.16.385-.036.154-.036.317-.036.643v1.116z"
      ></path>
    </svg>
  );
}

export default Edit03Icon;