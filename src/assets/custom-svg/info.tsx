interface Props {
  color?: string;
}
const InfoIcon: React.FC<Props> = ({ color = "#000000" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <g clip-path="url(#clip0_48_12658)">
        <path
          d="M4.5 8.25C6.57107 8.25 8.25 6.57107 8.25 4.5C8.25 2.42893 6.57107 0.75 4.5 0.75C2.42893 0.75 0.75 2.42893 0.75 4.5C0.75 6.57107 2.42893 8.25 4.5 8.25Z"
          stroke={color}
          stroke-width="0.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.5 3V4.5"
          stroke={color}
          stroke-width="0.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.5 6H4.50375"
          stroke={color}
          stroke-width="0.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_48_12658">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default InfoIcon;
