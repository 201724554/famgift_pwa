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
        if (!window.confirm("삭제 처리하시겠어요?")) {
            return;
        }
    }

    const updateGroup = () => {
    }

    return (
        <div className="coupon-card">
            {/* {props.coupon.gifticonIsUsed === "Y" && (<div className="overlay" style={overLayStyle}>사용</div>)} */}
            <div className="coupon-info">
                <h3>{props.group.groupName}</h3>
                <p>관리자: {props.group.adminName}</p>
                {props.group.isAdmin === "Y" && (<button className="days-left">관리자</button>)}
            </div>

            {/* 삭제/수정 버튼 수직으로 정렬하기 */}
            <div className="verticalAlign">
                <button className="delete-button" onClick={() => {}}>🗑️</button>
                <button className="edit-button" onClick={() => {}}>✏️</button>
            </div>
        </div>
    );
};

export default GroupBox;
