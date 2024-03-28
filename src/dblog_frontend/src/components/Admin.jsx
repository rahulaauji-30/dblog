import { NavLink } from "react-router-dom";
import Blogs from "./Blogs";
import { dblog_backend } from "../../../declarations/dblog_backend";
import { useEffect } from "react";
import BlogsAdmin from "./BlogsAdmin";
export default function Admin(){
    
    return <>
       <div className="admin-post">
       <NavLink to="/newpost" className="new-post">New Post</NavLink>
        <div className="blog-main">
        <BlogsAdmin/>
        </div>
       </div>
    </>
}
