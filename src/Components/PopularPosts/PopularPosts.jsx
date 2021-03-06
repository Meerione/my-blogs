import React from "react";
import {popularPost} from "../../constant";

const stylePostItem = {
    width: "50px"
}
const postItem = (props) => {
    return(
         <ul className="w3-ul w3-hoverable w3-white">
                {
                    popularPost.map((item,index)=>{
                    return (
                        <li className="w3-padding-16" key={index}>
                            <img src={item.imageUrl} className="w3-left w3-margin-right" style={stylePostItem} />
                            <span className="w3-large">{item.title}</span><br />
                            <span>{item.subTitle}</span>
                        </li>
                    )
                    })
                }
            </ul>
    )
}

export const PopularPosts = () => {
    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <postItem/>
            </div>
            <hr />
        </>
    )
}