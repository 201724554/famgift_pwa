import React, { useEffect, useState } from "react";
import CouponBox from './CouponBox.js';
import { customAxios } from "../../common/CustomAxios.js";

const samples = [
    { id: 1, title: "test2", description: "q", date: "2024-09-30", daysLeft: 22, imageUrl: "path-to-your-image" },
    { id: 2, title: "test", description: "test", date: "2024-09-30", daysLeft: 22, imageUrl: "path-to-your-image" },
    { id: 3, title: "test", description: "test", date: "2024-09-30", daysLeft: 22, imageUrl: "path-to-your-image" },
    { id: 4, title: "test", description: "test", date: "2024-09-30", daysLeft: 22, imageUrl: "path-to-your-image" },
    { id: 5, title: "test", description: "test", date: "2024-09-30", daysLeft: 22, imageUrl: "path-to-your-image" },
    { id: 6, title: "test", description: "test", date: "2024-09-30", daysLeft: 22, imageUrl: "path-to-your-image" },
    { id: 7, title: "test", description: "test", date: "2024-09-30", daysLeft: 22, imageUrl: "path-to-your-image" },
    { id: 8, title: "test", description: "test", date: "2024-09-30", daysLeft: 22, imageUrl: "path-to-your-image" },
    { id: 9, title: "test", description: "test", date: "2024-09-30", daysLeft: 22, imageUrl: "path-to-your-image" },
];


const CouponsContainer = () => {
    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        //axios -> setCoupons
        customAxios.get(process.env.REACT_APP_API_URL + "gifticon")
            .then((response) => {
                //console.log(response.data)
                setCoupons(response.data)
            })
            .catch()
        //setCoupons(samples);
    }, [])

    return (
        <div className="coupon-container">
            {coupons.map((item) => (
                <CouponBox key={item.id} coupon={item} />
            ))}
        </div>
    );
};

export default CouponsContainer;
