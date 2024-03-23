import { useState } from "react";
import { dblog_backend } from "declarations/dblog_backend";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Post from "./components/Post";
import Blogs from "./components/Blogs";
import Admin from "./components/Admin";
import NewPost from "./components/NewPost";

function App() {
  return (
    <main>
      <Navbar />
      <NewPost/>
    </main>
  );
}

export default App;
