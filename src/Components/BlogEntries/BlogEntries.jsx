import React from "react";
import BlogItem from "./BlogItem";
import {posts} from "../../constant"

const BlogEntries = () => {

return (
    <div className="w3-col l8 s12">
        {
           posts.map((item, index) => {
                console.log(posts)
                return <BlogItem
                    key={index}
                    user={item.user}
                    title={item.title}
                    titleDesc={item.titleDesc}
                    date={item.date}
                    desc={item.desc}
                    tag={item.tag}
                    countComments={item.countComments}
                    imageUrl={item.imageUrl}
                    id={item.id}
                />
            })
        }
        </div>
    )
}

export default BlogEntries;


