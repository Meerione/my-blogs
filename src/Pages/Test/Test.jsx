import React, { useState } from "react";
import { cards } from "../../constant";
import UseCard from "./UseCard";

const Test = () => {
    const [number, setNumber] = useState(0);
    const [data, setData] = useState([]);

    const increment = () => {
        setNumber(number + 1)
    }

    const decrement = () => {
        setNumber(number - 1)
    }
    const getData = () => {
        setData(cards)
    }

        return (
            <div className="container" style={{ backgroundColor:"rgb(191, 227, 236);"}}>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={getData}>Запрос данных</button>
            <h1>{number}</h1>
            {
                data.map((item) => {
                    return (
                         <UseCard
                            key={item.id}
                            name={item.name}
                            email={item.email}
                            phone={item.phone}
                            website={item.website}
                            companyName={item.companyName}
                            />
                    )
                })
            }
            
        </div>
        

    )

}
export default Test;




/*GET,POST, PUT, DELETE
       * c-post
       * r-get
       * u-put
       * d-delete
        */