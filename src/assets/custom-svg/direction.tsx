import type React from "react";

interface Props {
  color?: string;
}
const DirectionIcon: React.FC<Props> = ({ color = "##E98C20" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
      <g clip-path="url(#clip0_85_231)">
        <path
          d="M1.375 5.04102L10.0833 0.916016L5.95833 9.62435L5.04167 5.95768L1.375 5.04102Z"
          stroke={color}
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_85_231">
          <rect width="11" height="11" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default DirectionIcon;
