import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function BlogDetail() {
  const [blogData, setBlogData] = useState("");

  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");

  // Fetching Blog Data.
  async function fetchBlogData() {
    await fetch("https://jsonplaceholder.org/posts/" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlogData(data);
      });
  }

  // Making Title for each blog dynamically.
  useEffect(() => {
    document.title = "Blog : " + blogData.category + " - " + blogData.title;
    fetchBlogData();
  }, []);

  return (
    <>
      {!blogData ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid border-9 h-12 w-12"></div>
        </div>
      ) : (
        <div className="w-4/6 mt-10 m-auto">
          <h1 className="text-2xl  my-7 font-semibold">{blogData.title}</h1>
          <div className="bg-gray-50 rounded-md p-4 shadow-2xl">
            <div className="flex justify-between capitalize mb-4 text-gray-500">
              <div className="capitalize font-semibold text-slate-500  bg-slate-200 text-sm  rounded-lg  px-2 py-0.5 text-center    ">
                category: {blogData.category}
              </div>
              <span> published at: {blogData.publishedAt} </span>
            </div>
            <img
              src={blogData.image}
              alt=""
              className="rounded-xl object-cover w-full h-60"
            />
            <p className="mt-5 text-slate-700 ">{blogData.content}</p>
            <Link
              to=".."
              className="w-full inline-block mt-4 text-sky-500 hover:text-white border border-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 text-center capitalize"
              relative="path"
            >
              Go Back to Blog Listing Page
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
