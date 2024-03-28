import { useState } from "react";
import { dblog_backend } from "declarations/dblog_backend";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Blogs from "./components/Blogs";
import Admin from "./components/Admin";
import NewPost from "./components/NewPost";
import { Outlet } from "react-router-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Navbar />
      <HashRouter future={{ v7_startTransition: true }}>
      <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </HashRouter>
    </main>
  );
}

export default App;
