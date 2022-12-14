import React from "react";

const Card = (props) => {
    return ( 
        <div>
            <button onClick={() => props.history.goBack()} >Back</button>
            card repo
        </div>
    );
}
 
export default Card;