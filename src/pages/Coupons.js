import React from "react";
import "../css/Coupons.css";
import CouponsHeader from './CouponsHeader.js';
import CouponsSearch from './CouponsSearch.js';
import CouponsContainer from './CouponsContainer.js';
import CouponsTail from './CouponsTail.js';

const CouponList = () => {
  return (
    <div className="coupon-list-container">
      <CouponsHeader/>
      <CouponsSearch/>
      <CouponsContainer/>
      <CouponsTail/>
    </div>
  );
};

export default CouponList;
