import "./App.css";

import Home from "./Home";
import NewBlog from "./NewBlog";
import Login from "./Login";
import List from "./List";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
export const BlogContext = createContext();

function App() {
  const [blog, setBlog] = useState([]);
  return (
    <div>
      <BlogContext.Provider value={{ blog, setBlog }}>
        <Routes>
          <Route path="/" element={<NewBlog />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/home/:id" element={<Home />}></Route>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BlogContext.Provider>
    </div>
  );
}

export default App;
