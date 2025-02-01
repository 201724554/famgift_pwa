import React, { useEffect, useState } from "react";
import "../css/Coupons.css";
import CouponBox from './CouponBox.js';

const samples = [
    { id: 1, title: "test2", description: "q", date: "2024-09-30", daysLeft: 22, imageUrl: "path-to-your-image" },
    { id: 2, title: "test", description: "test", date: "2024-09-30", daysLeft: 22, imageUrl: "path-to-your-image" },
];


const CouponsContainer = () => {
    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        //axios -> setCoupons
        setCoupons(samples);
    }, [])

    return (
        <div>
            {coupons.map((item) => (
                <CouponBox key={item.id} coupon={item}/>
            ))}
        </div>
    );
};

export default CouponsContainer;
