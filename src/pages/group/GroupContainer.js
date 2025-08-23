import React, { useEffect, useState } from "react";
import { customAxios } from "../../common/CustomAxios.js";
import GroupBox from "./GroupBox.js";

//groupId
//groupName
//adminName
//groupPassword
const GroupContainer = (props) => {
    return (
        <div className="coupon-container">
            {props.groups.map((item) => (
                <GroupBox
                    key={item.groupId}
                    group={item}
                    getCoupons={props.getCoupons}
                />
            ))}
        </div>
    );
};

export default GroupContainer;
