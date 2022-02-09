import React from "react";
import Moment from "react-moment";
import { FaEye, FaStar, FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

const RepoCard = ({
  rName,
  author,
  avatar,
  stars,
  watchers,
  forks,
  description,
  updatedDate,
}) => {
  return (
    <div>
      <Link to={`/${author}/${rName}`}>
        <div className="p-3 bg-gray-200 rounded-2xl shadow-xl transition-all ease-linear duration-500 transform hover:-translate-y-1">
          <div className="flex justify-center mb-5">
            <img src={avatar} className="h-[10rem] rounded-full" alt="M" />
          </div>
          <div className="">
            <p className="">
              <span className="text-gray-700 font-semibold">Repo name: </span>{" "}
              {rName}
            </p>
            <p className="">
              <span className="text-gray-700 font-semibold">Author: </span>{" "}
              {author}
            </p>
            <p className="">
              <span className="text-gray-700 font-semibold">description: </span>
              {description ? description.slice(0, 5) : rName}..
            </p>
            <p className="">
              <span className="text-gray-700 font-semibold">Update date: </span>{" "}
              <Moment format="YYYY-MM-DD">{updatedDate}</Moment>
            </p>
            <div className="flex justify-evenly mt-5">
              <p className="">
                {/* <span className="text-gray-700 font-semibold">number of star:</span> */}
                <FaStar className="mr-2 inline-block" /> {stars}
              </p>
              <p className="">
                {/* <span className="text-gray-700 font-semibold">watchers : </span>{" "} */}
                <FaEye className="mr-2 inline-block" /> {watchers}
              </p>
              <p className="">
                {/* <span className="text-gray-700 font-semibold">fork : </span> */}
                <FaUtensils className="mr-2 inline-block" /> {forks}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RepoCard;
