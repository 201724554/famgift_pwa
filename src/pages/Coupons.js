import React from "react";
//import "../css/Header.css";
import "../css/Coupons.css";
//import Header from './Header.js';
import CouponsCategory from './CouponsCategory.js';
import CouponsSearch from './CouponsSearch.js';
import CouponsContainer from './CouponsContainer.js';
import CouponsTail from './CouponsTail.js';

const CouponList = () => {
  return (
    <div className="coupon-list-container">
      <CouponsCategory/>
      <CouponsSearch/>
      <CouponsContainer/>
      <CouponsTail/>
    </div>
  );
};

export default CouponList;
