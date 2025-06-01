import React from "react";
import { useNavigate } from 'react-router-dom';


const CouponsTail = () => {
  const navigate = useNavigate();
  const registerCoupon = () => {
    navigate("/register");
  }

  return (
    <div className="floating-buttons">
      <button className="register-button" onClick={()=>{registerCoupon()}}>쿠폰등록</button>
      <button className="shared-room">공유방 입장</button>
    </div>
  );
};

export default CouponsTail;
