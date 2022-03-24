import React from 'react';
import { useParams } from 'react-router-dom';

import styles from "./Article.module.css";
import Comments from './Comments';
import {posts} from "../../constant"


const Article = () => {
    const params = useParams();
const postId = parseInt(params.id)
const postData = posts.find((item) =>{
    return item.id === postId;
})


    console.log(postData);
    return (
        
        <div className={styles.main}>
            <div className={styles.container}>
                {
                postData.user.map((item)=>{
                    return <>
                    <img src={item.imgLink} alt="" />
                    <p>{item.name} {item.dateUser}</p> <br />
                </>
                })
                    }
            </div>
            <h1>{postData.title}</h1>
            <div className={styles.flex}>
            {
                postData.tag.map((item) => {
                    return <><p>{item}</p></> 
                })
            }
            </div>
           
            <img src={postData.imageUrl} alt="" /> <br />
            <p>{postData.desc}</p>
            <p>{postData.desc}</p>
            <p>Тем не менее, именно на жизнь последнего поколения перед Ньютоном и Бойлем (в частности, на зрелые годы Катарины Кеплер) пришлись сразу два события, наверняка заставившие средневековых европейцев в предпоследний и последний раз усомниться в незыблемости небес и понадеяться на Второе Пришествие. Это были взрывы сверхновых, произошедшие в 1572 году (сверхновая Браге) и 1604 (сверхновая Кеплера), на века вперед определившие развитие астрономии и более не повторявшиеся до 1987 года. Отчетливо сознавая, что этот пост не вполне соответствует тематике Хабра, далее я напомню обо всех достоверно известных семи сверхновых, зажигавшихся в небе Земли на протяжении истории человечества – и об их роли в развитии астрономии и астрофизики. </p> <br /> <br />
             <Comments/>
        </div>
    
    );
};

export default Article;