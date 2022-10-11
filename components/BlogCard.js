import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }) => {
  const { title, id, body, userId } = blog;
  return (
    <div
      style={{
        border: "4mm ridge rgba(211, 220, 50, .6)",
        padding: "10px",
      }}
    >
      <h4>{title}</h4>
      <Link href={`/blogs/${id}`}>
        <a
          style={{
            backgroundColor: "purple",
            color: "white",
            padding: "5px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Details
        </a>
      </Link>
    </div>
  );
};

export default BlogCard;
