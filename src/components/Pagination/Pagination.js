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
        {
          <button
            onClick={() => prevPage()}
            disabled={currentPage === 1 ? true : false}
          >
            «
          </button>
        }

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
        {
          <button
            onClick={() => nextPage()}
            disabled={pageNumbers.length === currentPage ? true : false}
          >
            »
          </button>
        }
      </ul>
    </PaginationContainer>
  );
};

export default Pagination;
