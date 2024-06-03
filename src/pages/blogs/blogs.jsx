import { useEffect, useState } from "react";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  const hasChild = useOutlet();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (hasChild) return <Outlet />;

  const onNavigate = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <div>
      {data.map((blog) => (
        <div
          key={blog.id}
          className="border p-4 my-4 w-[400px] m-auto hover:bg-slate-400 cursor-pointer transition"
          onClick={() => onNavigate(blog.id)}
        >
          <h2>{blog.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
