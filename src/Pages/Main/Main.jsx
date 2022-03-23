import React from "react";
import Header from "../../Components/Header/Header";
import BlogEntries from "../../Components/BlogEntries/BlogEntries";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer/Footer";

const Main = () => {
    return(
        <>
      <div className="w3-content" style={{maxWidth:"1400px"}}>
            <Header/>
            <div className="w3-row">
            <BlogEntries/>
            <Sidebar/>
            </div>
      </div>
    <Footer/>
    </>
    )
}

export default Main;