import React, { useState } from "react";

type propType = {
  handlePage: (num: number) => void;
  page: number;
};

const Pagination: React.FC<propType> = ({ handlePage, page }) => {

  return (
    <div className="flex justify-center pb-10">
      <button
        className="px-4 py-2 mx-1 bg-blue-500 text-white rounded"
        onClick={() => handlePage(-1)}
        disabled={page === 1}
      >
        Prev
      </button>
      <button className="px-4 py-2 mx-1 bg-blue-500 text-white rounded">
        {page}
      </button>
      <button
        className="px-4 py-2 mx-1 bg-blue-500 text-white rounded"
        onClick={() => handlePage(1)}
        disabled={page === 9}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
