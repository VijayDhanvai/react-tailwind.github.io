import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Blog() {
  const [blogList, setBlogList] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [filteredBlogList, setFilteredBlogList] = useState([]);

  function fetchBlogData() {
    fetch("https://jsonplaceholder.org/posts/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlogList(data);
        setShowLoading(false);
        setFilteredBlogList(data);
      });
  }

  const handleBlogSearch = (event) => {
    const searchTerm = event.target.value;

    if (event.target.value) {
      const filteredBlogs = blogList.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogList(filteredBlogs);
    } else {
      setFilteredBlogList(blogList);
    }
  };

  useEffect(() => {
    document.title = "Blog listing using useEffect and useState and fetch API";

    fetchBlogData();
  }, []);

  return (
    <>
      <h2 className="mt-6 text-center text-3xl text-amber-500  ">
        Blog listing using
        <strong className="font-semibold"> useEffect</strong> and
        <strong className="font-semibold"> useState</strong>
      </h2>

      <div className="flex  mt-7 justify-between w-full items-center pb-1">
        <h3 className="text-2xl text-gray-600 font-semibold">Blog Listing</h3>

        <div className="flex">
          <input
            type="text"
            onChange={handleBlogSearch}
            className="py-2 mr-2 w-80 px-3 border border-gray-200 border-solid focus:ring-4 focus:outline-none focus:ring-sky-300 rounded-md  text-slate-700"
            placeholder="Search Blog/Insight by title"
          />
          <div className="capitalize font-semibold text-slate-500  bg-slate-100 text-sm  rounded-lg  px-5 py-2.5 text-center  ">
            Blog Count {filteredBlogList.length}
          </div>
        </div>
      </div>
      <hr />

      {showLoading && (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid border-9 h-12 w-12"></div>
        </div>
      )}

      <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBlogList &&
          filteredBlogList.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
              <img src={post.image} alt="" className="border rounded-lg mb-4" />
              <h2 className="text-md font-semibold mb-2 text-sky-500">
                {post.title}
              </h2>

              <div className="flex justify-between mb-3 text-slate-600">
                <div className="capitalize font-semibold text-slate-500  bg-slate-100 text-sm  rounded-lg  px-2 py-0.5 text-center    ">
                  {post.category}
                </div>
                <div className="text-sm ">{post.publishedAt}</div>
              </div>
              <p className="text-gray-500 text-sm">
                {post.content.substr(0, 150) + "..."}
              </p>
              <Link
                to=""
                className="inline-block mt-4 text-sky-500 hover:text-white border border-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 text-center capitalize"
              >
                Read more
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
export default Blog;
