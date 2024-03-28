import { dblog_backend } from "../../../declarations/dblog_backend";
import D from "../../public/3D.jpg";
import adventure from "../../public/adventure.jpg";
import space from "../../public/space.jpg";
import Blockchain from "../../public/blockchain.jpeg";
import { useEffect, useState } from "react";
import BlogAdmin from "./BlogAdmin";

export default function BlogsAdmin() {
  const [blogs, setBlogs] = useState([]);
  const images = [D,space,adventure,Blockchain]
  useEffect(() => {
    fetchData();
    console.log("Admin Triggered");
  }, []);
  async function fetchData() {
    const data = await dblog_backend.getData();
    setBlogs(data);
  }
  return (
    <>
      {blogs.map((blog,index) => {
        
        return (
          <BlogAdmin
            img={images[Math.floor(Math.random() * images.length)]}
            title={blog.Title}
            author={blog.Author}
            date={blog.Date}
          />
        );
      })}
    </>
  );
}
