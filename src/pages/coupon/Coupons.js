import React from "react";
import CouponsCategory from '../category/CouponsCategory.js';
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
