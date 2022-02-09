import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { FaUser, FaGitSquare, FaEye, FaStar, FaUtensils } from "react-icons/fa";
import axios from "axios";

const DetailPage = () => {
  let { author, rName } = useParams();
  const [resData, setResData] = useState("");
  const [loading, setLoading] = useState(true);
  // const [readMe, setReadMe] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        // `${process.env.REACT_APP_GITHUB_URL}/repos/${author}/${rName}`
        `https://api.github.com/repos/${author}/${rName}`
      );
      console.log(data);
      setResData(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
      console.log("Failed to fetch");
    }
  };

  // const readMeData = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://raw.githubusercontent.com/${resData?.owner?.login}/${resData?.name}/${resData?.default_branch}/README.md`
  //     );
  //     console.log(data);
  //     setReadMe(data);
  //   } catch (err) {
  //     setLoading(false);
  //     console.log(err);
  //     console.log("Failed to fetch");
  //   }
  // };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className=" mb-5 h-[80vh]">
          {loading ? (
            <p className="flex items-center justify-center">Loading</p>
          ) : (
            <>
              <div className="flex items-center justify-center gap-2 md:gap-5">
                <img
                  src={resData?.owner?.avatar_url}
                  className="h-[6rem] md:h-[10rem] rounded-2xl shadow-2xl"
                  alt="M"
                />
                <div className="flex flex-col  justify-center space-y-1 md:space-y-3">
                  <p className="">
                    <span className="text-base md:text-lg text-gray-800 font-medium">
                      Author:{" "}
                    </span>
                    <span className="text-sm md:text-base">
                      {resData?.owner?.login}
                    </span>
                  </p>
                  <p className="">
                    {" "}
                    <span className="text-base md:text-lg text-gray-800 md:font-medium">
                      Repo Name:{" "}
                    </span>{" "}
                    <span className="text-sm md:text-base">
                      {resData?.name}
                    </span>
                  </p>
                  <div className="flex my-5 space-x-5">
                    <a
                      target="_blank"
                      href={`https://github.com/${resData?.owner?.login}`}
                      className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition-all ease-linear duration-500 transform hover:-translate-y-1 outline-none "
                    >
                      <FaUser className="inline-block text-base md:text-xl lg:text-2xl mr-3" />
                      User
                    </a>
                    <a
                      target="_blank"
                      href={resData?.html_url}
                      className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition-all ease-linear duration-500 transform hover:-translate-y-1 outline-none  "
                    >
                      <FaGitSquare className="inline-block text-base md:text-xl lg:text-2xl mr-3" />
                      Repo
                    </a>
                  </div>
                </div>
              </div>
              <br />
              <div className=" py-5 flex justify-center">
                <div className="bg-gray-500 py-5 flex justify-evenly mt-5 w-[100%] md:w-[70%] lg:w-[50%] items-center mx-auto">
                  <p className="flex items-center flex-col font-semibold space-y-2">
                    <span className=" text-white font-semibold">
                      Number of Star
                    </span>
                    <FaStar className="mr-2 inline-block text-white" />{" "}
                    <span className=""> {resData?.stargazers_count} </span>
                  </p>
                  <p className="flex flex-col items-center font-semibold space-y-2">
                    <span className="text-white ">Watchers </span>{" "}
                    <FaEye className="mr-2 inline-block text-white" />{" "}
                    <span className="">{resData?.watchers_count}</span>
                  </p>
                  <p className="flex flex-col items-center font-semibold space-y-2">
                    <span className="text-white ">Fork </span>
                    <FaUtensils className="mr-2 inline-block text-white" />{" "}
                    <span className="">{resData?.forks_count}</span>
                  </p>
                </div>
              </div>
              <div className=" w-[100%] md:w-[75%] lg:w-[50%] mx-auto">
                <div className="pl-3">
                  <p className="">
                    <span className="text-base md:text-lg text-gray-800 font-semibold">
                      Description:{" "}
                    </span>
                    <span className="">{resData?.description}</span>
                  </p>
                  <p className="">
                    <span className="text-base md:text-lg text-gray-800 font-semibold">
                      Number of open issue:{" "}
                    </span>
                    <span className="">{resData?.open_issues_count}</span>
                  </p>
                  <p className="">
                    <span className="text-base md:text-lg text-gray-800 font-semibold">
                      Default Branch:{" "}
                    </span>
                    <span className="">{resData?.default_branch}</span>
                  </p>
                  <p className="">
                    <span className="text-base md:text-lg text-gray-800 font-semibold">
                      Created At:{" "}
                    </span>
                    <Moment format="YYYY-MM-DD">{resData?.updated_at}</Moment>
                  </p>
                  <p className="">
                    <span className="text-base md:text-lg text-gray-800 font-semibold">
                      Updated At:{" "}
                    </span>
                    <Moment format="YYYY-MM-DD">{resData?.created_at}</Moment>
                  </p>
                  <div className="">
                    <span className="text-base md:text-lg text-gray-800 font-semibold">
                      Readme File:{" "}
                    </span>
                    <a
                      target="_blank"
                      href={`https://raw.githubusercontent.com/${resData?.owner?.login}/${resData?.name}/${resData?.default_branch}/README.md`}
                      className=""
                    >
                      Open the file
                    </a>
                    {/* <pre
                      style={{ wordWrap: "break-word", whiteSpace: "pre-wrap" }}
                    >
                      {readMe}
                    </pre> */}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
