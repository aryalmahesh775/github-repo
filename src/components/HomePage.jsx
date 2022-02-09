import React, { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import RepoCard from "./cards/RepoCard";
import Pagination from "./utils/Pagination";

const HomePage = () => {
  const [keyword, setKeyword] = useState("");
  const [fetchData, setFetchData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState("1");
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState("200");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [postsPerPage, setPostsPerPage] = useState(12);
  // eslint-disable-next-line no-unused-vars
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = fetchData?.slice(indexOfFirstPost, indexOfLastPost);

  // change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(fetchData?.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const getall = async (keyword, page, limit) => {
    try {
      const { data } = await axios.get(
        // `${process.env.REACT_APP_GITHUB_URL}/search/repositories?q=${keyword}&page=${page}&per_page=${limit}`
        `https://api.github.com/search/repositories?q=${keyword}&page=${page}&per_page=${limit}`
      );
      console.log(data);
      console.log(data.items);
      setFetchData(data.items);
    } catch (err) {
      console.log(err);
      console.log("Failed to fetch");
    }
  };

  const HandleSearch = async (e) => {
    e.preventDefault();
    getall(keyword, page, limit);
  };

  return (
    <div className=" ml-3 my-5 h-[75vh]">
      <div className="flex justify-center my-10">
        <div className="w-[22rem] md:w-[24rem] ">
          <form className="relative" onSubmit={(e) => HandleSearch(e)}>
            <input
              type="text"
              required
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              className="shadow-md rounded-full bg-gray-200 w-[22rem] md:w-[25rem] py-3 pl-5 pr-14 focus:outline-none"
              placeholder="Search for the repos "
            />
            <button
              type="submit"
              className="absolute cursor-pointer top-5 md:top-3 right-5 md:right-1"
            >
              <FaSearch className="md:text-2xl" />
            </button>
          </form>
        </div>
      </div>

      <div className="container mb-5">
        {fetchData === null ? (
          <div className="">Search for the data</div>
        ) : (
          <div className="">
            <p className="text-gray-800 my-4">
              Total Repos: <span className="">{fetchData.length}</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-5 lg:grid-cols-3 gap-5">
              {currentPosts.map((item) => {
                return (
                  <div key={item.id} className="mt-5">
                    <RepoCard
                      rName={item.name}
                      author={item.owner.login}
                      avatar={item.owner.avatar_url}
                      stars={item.stargazers_count}
                      watchers={item.watchers_count}
                      forks={item.forks}
                      description={item.description}
                      updatedDate={item.updated_at}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center">
              {fetchData.length > 10 && (
                <Pagination
                  handlePrevBtn={handlePrevBtn}
                  currentPage={currentPage}
                  pageNumbers={pageNumbers}
                  maxPageNumberLimit={maxPageNumberLimit}
                  minPageNumberLimit={minPageNumberLimit}
                  paginate={paginate}
                  handleNextBtn={handleNextBtn}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
