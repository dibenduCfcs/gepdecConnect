import './styles.css';
interface Props {
  count?: number;
  totalCount?: number;
  color?: string;
}

const FilterCount: React.FC<Props> = (props) => {
  return (
    <span className="filter-count">
      {'Showing'} <span className="filter-count-active">{props.count}</span> {'of'}
      <span style={{ color: props.color ?? '#E98C20' }}> {props.totalCount}</span> {'projects'}
    </span>
  );
};

export default FilterCount;
