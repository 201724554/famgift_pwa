import React, { useState } from 'react';
import { isEmpty } from '../../common/Util';

//props.category.name
//props.category.id
//props.onClickAtv
//props.onTouchStartAtv
//props.onTouchEndAtv
//props.selectedCategories
//props.setSelectedCategories
const CategoryBox = (props) => {
    const [isLongPressed, setIsLongPressed] = useState(false);
    const [btnColor, setBtnColor] = useState("#FFFFFF");
    const [isSelected, setIsSelected] = useState(false);

    let timer;

    const onTouch = () => {
        if (isEmpty(props.onClickAtv) || props.onClickAtv === true) {
            if (isSelected === false) {
                setBtnColor("#AFDDFA");
                props.setSelectedCategories([...props.selectedCategories, props.category.id]);
            }
            if (isSelected === true) {
                setBtnColor("#FFFFFF");
                props.setSelectedCategories(props.selectedCategories.filter(categoryId => categoryId !== props.category.id));
            }
            setIsSelected(!isSelected);
        }
    };

    const handleTouchStart = () => {
        if (isEmpty(props.onTouchStartAtv) || props.onTouchStartAtv === true) {
            timer = setTimeout(() => {
                setIsLongPressed(true);
            }, `${process.env.REACT_APP_BTN_PRS_TIMEOUT}`); //1000ms
        }
    };

    const handleTouchEnd = () => {
        if (isEmpty(props.onTouchEndAtv) || props.onTouchEndAtv === true) {
            clearTimeout(timer);
        }
    };

    return (
        <button
            style={{ backgroundColor: btnColor }}
            className="category-button" onClick={onTouch} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>{props.category.name}</button>
    );
};

export default CategoryBox;
