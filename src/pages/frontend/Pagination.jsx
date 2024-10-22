import React from "react";

function Pagination({ total, limit, onPageChange, currentPage }) {
  const numPages = Math.ceil(total / limit);

  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= numPages) {
      onPageChange(pageNumber);
    }
  };

  const renderPageLinks = () => {
    const links = [];
    if (numPages <= 1) return links;

    // First Page Button
    links.push(
      <li key="first" className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
        <button className="page-link" onClick={() => handlePageClick(1)}>
          Đầu
        </button>
      </li>
    );

    // Previous Page Button
    links.push(
      <li key="prev" className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
        <button className="page-link" onClick={() => handlePageClick(currentPage - 1)}>
          &laquo;
        </button>
      </li>
    );

    // Generate Page Numbers
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(startPage + 4, numPages);

    for (let i = startPage; i <= endPage; i++) {
      links.push(
        <li key={i} className={`page-item ${currentPage === i ? "active" : ""}`}>
          <button className="page-link" onClick={() => handlePageClick(i)}>
            {i}
          </button>
        </li>
      );
    }

    // Next Page Button
    links.push(
      <li key="next" className={`page-item ${currentPage === numPages ? "disabled" : ""}`}>
        <button className="page-link" onClick={() => handlePageClick(currentPage + 1)}>
          &raquo;
        </button>
      </li>
    );

    // Last Page Button
    links.push(
      <li key="last" className={`page-item ${currentPage === numPages ? "disabled" : ""}`}>
        <button className="page-link" onClick={() => handlePageClick(numPages)}>
          Cuối
        </button>
      </li>
    );

    return links;
  };

  return <ul className="pagination justify-content-center">{renderPageLinks()}</ul>;
}

export default Pagination;
