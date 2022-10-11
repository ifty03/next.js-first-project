import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const { query } = useRouter();
  const { blogId } = query;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  const { title, id, body } = blog;
  return (
    <div style={{ margin: "100px" }}>
      <h1>{id}</h1>
      <h2 style={{ color: "red" }}>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default BlogDetails;
