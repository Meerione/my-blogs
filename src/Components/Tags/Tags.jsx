import React, {useState} from "react";
import {tags} from "../../constant";

const Tags = () => {
    const [tag, setTag] = useState('new York')

    console.log(tag);

    const clickTag = () =>{
        if(tag==='new York'){
            setTag('London');
        }else{
            setTag('new York');
        }
       
    }
    return (
        <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
                <h4 onClick={clickTag}>{tag}</h4>
            </div>
            <div className="w3-container w3-white">
                {
                           tags.map((item,index)=>{
                               return (<span key={index} className="w3-tag w3-light-grey w3-small w3-margin-bottom" style={{marginRight:"3px"}}>{item.tag}</span>
                               )
                    })
                }
                   

            </div>
        </div>
    )
}

export default Tags;


