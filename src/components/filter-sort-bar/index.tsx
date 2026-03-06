import colors from "../../static/colors";
import FilterCount from "../filter-count";

interface Props {
  count?: number;
  totalCount?: number;
  color?: string;
  sortByName?: string;
}

const FilterSortBar: React.FC<Props> = ({
  count = 0,
  totalCount = 0,
  color = colors.background,
  sortByName = "",
}) => {
  return (
    <div className="anc-filter-con">
      <FilterCount count={count} totalCount={totalCount} color={color} />
      <div className="anc-filter-con">
        <span>
          {"Sorted by:  "}
          <span>{sortByName}</span>
        </span>
      </div>
    </div>
  );
};

export default FilterSortBar;
