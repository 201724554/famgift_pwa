import React, { useEffect, useState, useRef } from "react";
import imageAlt from '../../static/image-alt.png';
import { customAxios } from "../../common/CustomAxios";
import { useNavigate } from 'react-router-dom';
import ModalWithDropdown from "../../common/ModalWithDropdown";


/*
groupId
groupName
groupAdminName
groupPassword
isAdmin
*/
//getGroups
const GroupBox = (props) => {
    const navigate = useNavigate();

    const deleteGroup = () => {
        if (window.confirm("삭제 처리하시겠어요?")) {
            customAxios.delete("/group", { data: { groupId: props.group.groupId } })
                .then(() => {
                    props.getGroups();
                })
                .catch()
        }
    }

    const showGroupMember = () => {
        customAxios.get("/group/user/" + props.group.groupId)
            .then((res) => {
                props.setGroupMembers(res.data);
                props.setShowGroupMembers(true);
            })
            .catch()
    }

    const refreshPswd = () => {
        if (window.confirm("비밀번호를 재발급하시겠어요?")) {
            customAxios.patch("/group/pswd", { groupId: props.group.groupId })
                .then(() => {
                    props.getGroups();
                })
                .catch()
        }
    }

    return (
        <div className="coupon-card">
            {/* {props.coupon.gifticonIsUsed === "Y" && (<div className="overlay" style={overLayStyle}>사용</div>)} */}
            <div className="coupon-info">
                <h3>{props.group.groupName}</h3>
                <p>관리자: {props.group.adminName}</p>
                {props.group.isAdmin === "Y" && (
                    <>
                        <p>코드: {props.group.groupPassword}</p>
                        <button className="days-left">관리자</button>
                    </>
                )}
            </div>

            {/* 삭제/수정 버튼 수직으로 정렬하기 */}
            {props.group.isAdmin === "Y" && (
                <div className="verticalAlign">
                    <button className="delete-button" onClick={() => { deleteGroup() }}>🗑️</button>
                    <button className="edit-button" onClick={() => { showGroupMember() }}>👨‍👩‍👧‍👦</button>
                    <button className="edit-button" onClick={() => { refreshPswd() }}>🔁</button>
                </div>
            )}
        </div>
    );
};

export default GroupBox;
