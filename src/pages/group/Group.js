import React, { useEffect, useState } from "react";
import { customAxios } from "../../common/CustomAxios.js";
import { isEmpty } from '../../common/Util';
import GroupContainer from "./GroupContainer.js";
import GroupTail from "./GroupTail.js";
import GroupMemberList from "./GroupMemberList.js";


const GroupList = () => {
    const [groups, setGroups] = useState([]);
    const [showGroupMembers, setShowGroupMembers] = useState(false);
    const [groupMembers, setGroupMembers] = useState([]);

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

    const fetchGroupMembers = (groupId) => {
         customAxios.get("/group/user/" + groupId)
                .then((res) => {
                    setGroupMembers(res.data);
                })
                .catch()
    }

    const onMemberDeleteClick = (userGroupId, groupId) => {
        customAxios.delete("userGroup", {data: { userGroupId: userGroupId, groupId: groupId }})
            .then(() => { fetchGroupMembers(groupId) })
            .catch()
    }

    return (
        <div className="coupon-list-container">
            <GroupContainer
                groups={groups}
                getGroups={getGroups}
                setShowGroupMembers={setShowGroupMembers}
                setGroupMembers={setGroupMembers}
            />
            <GroupTail
                getGroups={getGroups}
            />
            <GroupMemberList
                isModalOpen={showGroupMembers}
                setIsModalOpen={setShowGroupMembers}
                modalData={groupMembers}
                onButtonClick={onMemberDeleteClick}
                fetchGroupMembers={fetchGroupMembers}
            />
        </div>
    );
};

export default GroupList;
