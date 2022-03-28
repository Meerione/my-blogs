import React from 'react';
import styles from "./UseCard.module.css";

 const UseCard = (props) => {
     console.log(props);
    return (
        <>
        <div className={styles.cardContainer}>
        <h3 className={styles.nick}>{props.name}</h3>
        <p className="nick">{props.email}</p>
        <p className="product">{props.phone}</p>
        <p className="about">{props.website}</p>
        <p>{props.companyName}</p>
        <div className={styles.btnContainer}>
            <button className={styles.btn}>Follow</button>
        </div>
        </div>
        </>
    );
};

export default UseCard;