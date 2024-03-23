import { useState } from "react";
import { dblog_backend } from "declarations/dblog_backend";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Post from "./components/Post";
import Blogs from "./components/Blogs";

function App() {
  return (
    <main>
      <Navbar />
      <div className="blog-main">
        <Blogs/>
      </div>
    </main>
  );
}

export default App;
