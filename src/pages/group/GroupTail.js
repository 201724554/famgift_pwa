import React,  { useState } from "react";
import Modal from "../../common/Modal.js";
import { useNavigate } from 'react-router-dom';
import { customAxios } from '../../common/CustomAxios.js';


const GroupTail = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupName, setGroupName] = useState("");

  const makeGroup = () => {
    customAxios.post("/group", { groupName: groupName })
      .then(() => {
        setIsModalOpen(false);
        setGroupName("");
        props.getGroups();
      })
      .catch()
  }

  return (
    <div className="floating-buttons">
      <button className="register-button" onClick={() => { setIsModalOpen(true) }}>공유방 등록</button>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalText={"추가할 공유방 이름을 입력하세요"}
        buttonText={"공유방 추가"}
        onButtonClick={makeGroup}
        modalData={groupName}
        setModalData={setGroupName}
      />
    </div>
  );
};

export default GroupTail;
