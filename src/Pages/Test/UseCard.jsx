import React from 'react';
import styles from "./UseCard.module.css";

 const UseCard = (props) => {
     console.log(props);
    return (
        <>
        
        <div className={styles.cardContainer}>
        <div className="details">
                    <h3 className={styles.nick}>{props.name}</h3>
                    <p className={styles.email}>{props.email}</p>
                    <p className={styles.phone}>{props.phone}</p>
                    <p className={styles.website}>{props.website}</p>
                    <p className={styles.company}>{props.companyName}</p>
        </div>
                    <div className={styles.btnContainer}>
                        <button className={styles.btn}>Follow</button>
                    </div>
        </div>
         
        </>
    );
};

export default UseCard;