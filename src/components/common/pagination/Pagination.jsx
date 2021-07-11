import React from 'react'
import PropTypes from 'prop-types';
import _ from 'lodash'

const Pagination = (props) => {
    const { allItemMovies, movieOnPage,currentPage ,onPageChange } = props;
    // console.log(currentPage);

  const pagesCount = Math.ceil(allItemMovies / movieOnPage)
  // console.log(pagesCount);
  // [1.....pagesCount].map()
  if(pagesCount === 1) return null
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        <button
          className="btn btn-primary"
          style={{ marginRight: "5px" }}
          onClick={props.handlePrev}
          disabled={currentPage === 1}
        >
          prev
        </button>
        {pages.map((page) => {
          return (
            <li
              style={{ cursor: "pointer", marginRight: "5px" }}
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a onClick={() => onPageChange(page)} className="page-link">
                {page}
              </a>
            </li>
          );
        })}
        <button
          className="btn btn-primary"
          style={{ marginLeft: "5px" }}
          onClick={props.handleNext}
          disabled={currentPage === 3}
        >
          next
        </button>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  allItemMovies: PropTypes.number.isRequired,
  movieOnPage: PropTypes.number.isRequired,
  currentPage:PropTypes.number.isRequired,
  onPageChange:PropTypes.func.isRequired,
};


export default Pagination



// const Pagination = ({ allItemMovies, movieOnPage, onPageChange }) => {