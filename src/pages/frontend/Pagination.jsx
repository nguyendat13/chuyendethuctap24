import React, { useState } from "react";

function Pagination({ total, limit, onPageChange, currentPage, url }) {
  const [numPages, setNumPages] = useState(Math.ceil(total / limit));

  const renderPageLinks = () => {
    const links = [];
    if (numPages === 1) return links;

    links.push(
      <li key="first" className="page-item">
        <a className="page-link" href={`${url}&page=1`}>
          Đầu
        </a>
      </li>
    );

    links.push(
      <li key="prev" className="page-item">
        <a className="page-link" href={`${url}&page=${currentPage - 1}`}>
          &laquo;
        </a>
      </li>
    );

    let startPage = 1;
    if (currentPage > 3 && numPages > 5) {
      startPage = Math.min(currentPage - 2, numPages - 4);
    }

    const endPage = Math.min(startPage + 4, numPages);

    for (let i = startPage; i <= endPage; i++) {
      links.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <a className="page-link" href={`${url}&page=${i}`}>
            {i}
          </a>
        </li>
      );
    }

    links.push(
      <li key="next" className="page-item">
        <a className="page-link" href={`${url}&page=${currentPage + 1}`}>
          &raquo;
        </a>
      </li>
    );

    links.push(
      <li key="last" className="page-item">
        <a className="page-link" href={`${url}&page=${numPages}`}>
          Cuối
        </a>
      </li>
    );

    return links;
  };

  return (
    <ul className="pagination justify-content-center">{renderPageLinks()}</ul>
  );
}

export default Pagination;
