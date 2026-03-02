import React, { useState } from "react";

interface Props {
  currentPage: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
  maxPage: number;
}

const Pagination: React.FC<Props> = ({ currentPage, onChange, maxPage }) => {
  const [goTo, setGoTo] = useState("");

  const changePage = (page: number) => {
    if (page < 1 || page > maxPage) return;
    onChange(page);
  };

  const getPages = () => {
    if (maxPage <= 10) {
      return Array.from({ length: maxPage }, (_, i) => i + 1);
    }

    let start = Math.max(currentPage - 4, 1);
    let end = start + 9;

    if (end > maxPage) {
      end = maxPage;
      start = maxPage - 9;
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const handleGoTo = () => {
    const pageNumber = Number(goTo);
    if (!isNaN(pageNumber)) {
      changePage(pageNumber);
      setGoTo("");
    }
  };

  const pages = getPages();

  return (
    <nav className="d-flex align-items-center justify-content-between gap-3">
      <ul className="pagination mb-0">
        {/* Previous */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => changePage(currentPage - 1)}>
            &laquo;
          </button>
        </li>

        {pages.map((page) => (
          <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
            <button className="page-link" onClick={() => changePage(page)}>
              {page}
            </button>
          </li>
        ))}

        {/* Next */}
        <li className={`page-item ${currentPage === maxPage ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => changePage(currentPage + 1)}>
            &raquo;
          </button>
        </li>
      </ul>

      {/* Go To Section */}
      <div className="d-flex align-items-center gap-2">
        <input
          type="number"
          min={1}
          max={maxPage}
          value={goTo}
          onChange={(e) => setGoTo(e.target.value)}
          className="form-control"
          style={{ width: "80px" }}
        />
        <button className="btn btn-sm btn-primary" onClick={handleGoTo}>
          Go
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
