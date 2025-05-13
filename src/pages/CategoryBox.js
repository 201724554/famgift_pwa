import React from "react";

//props.category.name
//props.category.id
const CategoryBox = (props) => {
    return (
        <button className="category-button">{props.category.name}</button>
    );
};

export default CategoryBox;
