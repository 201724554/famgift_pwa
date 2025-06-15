import React, { useEffect, useState } from "react";
import CouponBox from './CouponBox.js';
import { customAxios } from "../../common/CustomAxios.js";

//coupons
//setCoupons
//setSelectedCoupon
const CouponsContainer = (props) => {
    return (
        <div className="coupon-container">
            {props.coupons.map((item) => (
                <CouponBox 
                key={item.id} 
                coupon={item} 
                setSelectedCoupon={props.setSelectedCoupon}
                setIsViewOpen={props.setIsViewOpen}/>
            ))}
        </div>
    );
};

export default CouponsContainer;
