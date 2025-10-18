import React, { useEffect } from 'react';
import '../../css/Modal.css';
import { getCookieValue } from '../../common/Util';

//modalData = {userGroupId, userId, userName, groupId}
const GroupMemberList = (props) => {
    const { isModalOpen, setIsModalOpen, modalData, onButtonClick } = props;
    useEffect(() => {
    }, [isModalOpen])

    const close = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="main">
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-title">공유방 멤버</span>
                        {
                            modalData.map((elem, key) =>
                                (
                                    <div key={key}>
                                        <input
                                            type="text"
                                            className="modal-input"
                                            defaultValue={elem.userName}
                                            readOnly={true}
                                        />
                                        &nbsp;
                                        {elem.userId == getCookieValue("userId") ? <span></span> : <span onClick={() => onButtonClick(elem.userGroupId, elem.groupId)}>❌</span>}
                                    </div>
                                )
                            )
                        }
                        <button onClick={() => close()} className="modal-button-close">
                            닫기
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GroupMemberList;
