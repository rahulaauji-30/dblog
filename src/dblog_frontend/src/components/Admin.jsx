import Blogs from "./Blogs";

export default function Admin(){

    return <>
       <div className="admin-post">
       <a className="new-post">New Post</a>
        <div className="blog-main">
        <Blogs/>
        </div>
       </div>
    </>
}