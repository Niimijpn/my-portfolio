/* eslint-disable react/button-has-type */
import React from "react";

interface PaginationProps {
  currentPageNumber: number;
  totalPages: number;
  onPageChange: (newPageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPageNumber,
  totalPages,
  onPageChange,
}) => {
  const incrementPageNumber = () => {
    if (currentPageNumber < totalPages) {
      onPageChange(currentPageNumber + 1);
    }
  };

  const decrementPageNumber = () => {
    if (currentPageNumber > 1) {
      onPageChange(currentPageNumber - 1);
    }
  };

  return (
    <div className="flex justify-around p-10">
      <button onClick={decrementPageNumber}>Previous</button>
      <button onClick={incrementPageNumber}>Next</button>
    </div>
  );
};

export default Pagination;
