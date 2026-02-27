interface Props {
  color?: string;
}
const TagIcon: React.FC<Props> = ({ color = "#000000" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <g clip-path="url(#clip0_48_12653)">
        <path
          d="M4.71975 0.96975C4.57913 0.829088 4.3884 0.750042 4.1895 0.75H1.5C1.30109 0.75 1.11032 0.829018 0.96967 0.96967C0.829018 1.11032 0.75 1.30109 0.75 1.5V4.1895C0.750042 4.3884 0.829088 4.57913 0.96975 4.71975L4.23375 7.98375C4.40419 8.15312 4.63472 8.24818 4.875 8.24818C5.11528 8.24818 5.34581 8.15312 5.51625 7.98375L7.98375 5.51625C8.15312 5.34581 8.24818 5.11528 8.24818 4.875C8.24818 4.63472 8.15312 4.40419 7.98375 4.23375L4.71975 0.96975Z"
          stroke={color}
          stroke-width="0.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.8125 3C2.91605 3 3 2.91605 3 2.8125C3 2.70895 2.91605 2.625 2.8125 2.625C2.70895 2.625 2.625 2.70895 2.625 2.8125C2.625 2.91605 2.70895 3 2.8125 3Z"
          fill={color}
          stroke={color}
          stroke-width="0.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_48_12653">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TagIcon;
