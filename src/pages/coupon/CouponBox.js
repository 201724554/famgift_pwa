import React, { useEffect, useState } from "react";

const CouponBox = (props) => {
    const [coupon, setCoupon] = useState({
        id: '',
        imageUrl: '',
        title: '',
        description: '',
        date: '',
        daysLeft: ''
    });

    useEffect(() => {
        setCoupon({
            id: props.coupon.id,
            imageUrl: props.coupon.imageUrl,
            title: props.coupon.title,
            description: props.coupon.description,
            date: props.coupon.date,
            daysLeft: props.coupon.daysLeft
        });
    }, [props.coupon]);

    return (
        <div className="coupon-card">
            <img src={coupon.imageUrl} alt={coupon.title} className="coupon-image" />
            <div className="coupon-info">
                <h3>{coupon.title}</h3>
                <p>{coupon.description}</p>
                <p>{coupon.date}</p>
                <button className="days-left">D-{coupon.daysLeft}</button>
            </div>
            <button className="delete-button">🗑</button>
        </div>
    );
};

export default CouponBox;
