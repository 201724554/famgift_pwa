import React, {useState} from "react";
import CategoryContainer from '../category/CategoryContainer.js';
import CouponsSearch from './CouponsSearch.js';
import CouponsContainer from './CouponsContainer.js';
import CouponsTail from './CouponsTail.js';

const CouponList = () => {
  //const [selectedCategories, addSelectedCategories] = useState([]);
  return (
    <div className="coupon-list-container">
      <CategoryContainer/>
      <CouponsSearch/>
      <CouponsContainer/>
      <CouponsTail/>
    </div>
  );
};

export default CouponList;
