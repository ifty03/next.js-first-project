import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import styles from "../../styles/blog.module.css";

const Index = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className={styles.blogCardBody}>
      {blogs?.map((blog) => (
        <BlogCard blog={blog} key={blogs?.id} />
      ))}
    </div>
  );
};

export default Index;
