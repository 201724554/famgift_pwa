import React, { useEffect, useState } from "react";
import { customAxios } from "../../common/CustomAxios.js";
import { isEmpty } from '../../common/Util';
import GroupContainer from "./GroupContainer.js";
import GroupTail from "./GroupTail.js";


const GroupList = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        getGroups();
    }, []);

    const getGroups = () => {
        customAxios.get("group")
            .then(
                (response) => {
                    setGroups(response.data);
                }
            )
            .catch()
    }

    return (
        <div className="coupon-list-container">
            <GroupContainer
                groups={groups}
                getGroups={getGroups}
            />
            <GroupTail
                getGroups={getGroups}
            />
        </div>
    );
};

export default GroupList;
