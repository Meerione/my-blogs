import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css"
import Main from "./Pages/Main/Main";
import Article from './Pages/Article/Aticle';
import Test from './Pages/Test/Test';




const App = () => {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="post/:id" element={<Article/>} />
            <Route path="test" element={<Test/>} />
            </Routes>
      </BrowserRouter>
  )
}



export default App;


