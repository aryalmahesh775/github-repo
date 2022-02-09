import React from "react";

const Pagination = ({
  handlePrevBtn,
  currentPage,
  pageNumbers,
  maxPageNumberLimit,
  minPageNumberLimit,
  paginate,
  handleNextBtn,
}) => {
  return (
    <div>
      <div className="">
        <ul className="flex items-center space-x-3 my-10">
          <li>
            <button
              className="w-full rounded-xl bg-gray-400 px-4 py-3 font-medium text-gray-50"
              onClick={handlePrevBtn}
              disabled={currentPage === pageNumbers[0] ? true : false}
            >
              Prev
            </button>
          </li>
          <button
            disabled={currentPage === pageNumbers[0] ? true : false}
            onClick={handlePrevBtn}
          >
            {" "}
            &hellip;{" "}
          </button>

          <div>
            <div className="hidden md:inline-block ">
              <div className="flex space-x-3 py-1  justify-center">
                {pageNumbers.map((number) => {
                  if (
                    number < maxPageNumberLimit + 1 &&
                    number > minPageNumberLimit
                  ) {
                    return (
                      <div
                        onClick={() => paginate(number)}
                        className={`flex cursor-pointer px-4 py-2 rounded-lg font-semibold text-gray-50 transition-all ease-linear duration-500  transform hover:translate-y-[-2px] outline-none ${
                          currentPage === number ? "bg-red-400" : "bg-gray-500"
                        }`}
                        key={number}
                      >
                        {/* <a>{number}</a> */}
                        {number}
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </div>

          <button
            className=""
            onClick={handleNextBtn}
            disabled={
              currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
            }
          >
            {" "}
            &hellip;{" "}
          </button>

          <li>
            <button
              className="w-full rounded-xl bg-gray-400 px-4 py-3 font-medium text-gray-50"
              disabled={
                currentPage === pageNumbers[pageNumbers.length - 1]
                  ? true
                  : false
              }
              onClick={handleNextBtn}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
