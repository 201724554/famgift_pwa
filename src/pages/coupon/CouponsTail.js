import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { customAxios } from '../../common/CustomAxios.js';
import Modal from "../../common/Modal";


const CouponsTail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupPswd, setGroupPswd] = useState("");
  const navigate = useNavigate();
  const registerCoupon = () => {
    navigate("/register");
  }

  const joinGroup = () => {
    customAxios.post("/user/group", { groupPswd: groupPswd })
      .then(() => {
        setIsModalOpen(false);
        setGroupPswd("");
      })
      .catch(() => {})
  }

  return (
    <div className="floating-buttons">
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalText={"들어갈 공유방 코드을 입력하세요"}
        buttonText={"공유방 입장"}
        onButtonClick={joinGroup}
        modalData={groupPswd}
        setModalData={setGroupPswd}
      />
      <button className="register-button" onClick={() => { registerCoupon() }}>쿠폰등록</button>
      <button className="shared-room" onClick={() => { setIsModalOpen(true) }}>공유방 입장</button>
    </div>
  );
};

export default CouponsTail;
