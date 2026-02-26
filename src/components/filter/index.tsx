import { useEffect, useState } from 'react';
import './styles.css';
import FilterCount from '../filter-count';
interface Props {
  children?: React.ReactNode;
  isHeaderVisible?: boolean;
  buttonText?: string;
}

const MOBILE_BREAKPOINT = 768;
const Filter: React.FC<Props> = ({ children, isHeaderVisible = false, buttonText = 'Filter' }) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= MOBILE_BREAKPOINT : false
  );
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="filter-container max-width-screen">
      {isHeaderVisible && (
        <div className="filter-top">
          <h3>{'Filter Projects'}</h3>
          <FilterCount count={12} totalCount={12} />
        </div>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: isMobile ? 'flex-end' : 'flex-start',
          width: '100%',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        {isMobile ? (
          <button type="submit" className="btn btn-dark btn-sm">
            {buttonText}
          </button>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Filter;
