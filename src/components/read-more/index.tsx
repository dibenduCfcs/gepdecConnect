import { useState } from 'react';
import './styles.css';

interface Props {
  value?: string;
  color?: string;
}

const ReadMoreCard: React.FC<Props> = ({ value = '', color = '#E98C20' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="read-more-card">
      <p className={`it-anc-description ${isExpanded ? 'expanded' : ''}`}>{value}</p>

      {value.length > 120 && (
        <button
          style={{ color }}
          className="read-more-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMoreCard;
