import React, { useState } from 'react';

//props.category.name
//props.category.id
const CategoryBox = (props) => {
    const [isLongPressed, setIsLongPressed] = useState(false);
    let timer;

    const handleTouchStart = () => {
        timer = setTimeout(() => {
            setIsLongPressed(true);
            // console.log("s");
        }, `${process.env.REACT_APP_BTN_PRS_TIMEOUT}`);
    };

    const handleTouchEnd = () => {
        // clearTimeout(timer);
        // setIsLongPressed(false);
    }

    return (
        <button className="category-button" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>{props.category.name}</button>
    );
};

export default CategoryBox;
