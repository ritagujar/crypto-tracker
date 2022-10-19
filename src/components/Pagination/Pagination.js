import React from "react";
import { PaginationContainer } from "./styles";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  prevPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer className="container">
      <ul className="pagination">
        {currentPage !== 1 && <button onClick={() => prevPage()}>«</button>}

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            href="!#"
            className={`${currentPage === number ? "active" : "none"}`}
          >
            {number}
          </button>
        ))}
        {pageNumbers.length !== currentPage && (
          <button onClick={() => nextPage()}>»</button>
        )}
      </ul>
    </PaginationContainer>
  );
};

export default Pagination;
