import React, { useEffect, useState } from "react";
import { customAxios } from "../../common/CustomAxios.js";
import SharedCouponBox from "./SharedCouponBox.js";

//coupons
//setCoupons
//getCoupons
//setSelectedCoupon
const SharedCouponsContainer = (props) => {
    return (
        <div className="coupon-container">
            {props.coupons.map((item) => (
                <SharedCouponBox
                    key={item.id}
                    coupon={item}
                    getCoupons={props.getCoupons}
                    setSelectedCoupon={props.setSelectedCoupon}
                    setIsViewOpen={props.setIsViewOpen} />
            ))}
        </div>
    );
};

export default SharedCouponsContainer;
