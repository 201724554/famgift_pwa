import React, { useEffect, useState } from 'react';
import { isEmpty } from '../../common/Util';


const ShareCouponGroupBox = (props) => {
    const [btnColor, setBtnColor] = useState("#FFFFFF");
    const [isSelected, setIsSelected] = useState(
        props.selectedGroups.includes(props.group.groupId) === true ? true : false
    );

    useEffect(() => {
        props.selectedGroups.includes(props.group.id) === true ? setBtnColor("#AFDDFA") : setBtnColor("#FFFFFF");
    }, [])

    const onTouch = () => {
        if (isEmpty(props.onClickAtv) || props.onClickAtv === true) {
            if (isSelected === false) {
                if (props.selectedGroups.length < props.maxCnt) {
                    setBtnColor("#AFDDFA");
                    props.setSelectedGroups([...props.selectedGroups, props.group.groupId]);
                }
            }
            if (isSelected === true) {
                setBtnColor("#FFFFFF");
                props.setSelectedGroups(props.selectedGroups.filter(groupId => groupId !== props.group.groupId));
            }
            setIsSelected(!isSelected);
        }
    };

    return (
        <button
            style={{ backgroundColor: btnColor }}
            className="category-button"
            onClick={onTouch}
        >
            {props.group.groupName}
        </button>
    );
};

export default ShareCouponGroupBox;
