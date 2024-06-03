import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const [blog, setBlog] = useState();
  const { blogId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
      .then((response) => response.json())
      .then((data) => setBlog(data));
  }, []);
  console.log(blog);

  return (
    <div>
      <h1>{blog?.title}</h1>
      <p>{blog?.body}</p>
    </div>
  );
};

export default BlogDetails;
