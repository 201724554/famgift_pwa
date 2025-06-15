import React, { useEffect, useState } from "react";
import imageAlt from '../../static/image-alt.png';
import { customAxios } from "../../common/CustomAxios";

/*
id
imagePath
brand
name
barcode
price
expirationDate
 */
//setSelectedCoupon
const CouponBox = (props) => {
    const [coupon, setCoupon] = useState({
        // id: '',
        // imageUrl: '',
        // title: '',
        // description: '',
        // date: '',
        // daysLeft: ''
        id: '',
        imagePath: '',
        brand: '',
        name: '',
        barcode: '',
        price: '',
        expirationDate: '',
        dateDiff: ''
    });

    useEffect(() => {
        setCoupon({
            id: props.coupon.id,
            imagePath: props.coupon.imagePath,
            brand: props.coupon.brand,
            name: props.coupon.name,
            barcode: props.coupon.barcode,
            price: props.coupon.price,
            expirationDate: props.coupon.expirationDate,
            dateDiff: calculateDateDiff(getCurrentDate(), props.coupon.expirationDate)
        });
    }, [props.coupon]);

    const getCurrentDate = () => {
        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
        const day = String(today.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    const calculateDateDiff = (fromDt, toDt) => {
        const from = new Date(fromDt);
        const to = new Date(toDt);

        const timeDiff = Math.abs(to - from); // 밀리초 단위 차이 계산
        const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 일 단위로 변환

        return dayDiff;
    }

    const deleteCoupon = () => {
        customAxios.patch("gifticon", { id: coupon.id })
            .then()
            .catch()
    }

    const viewCoupon = () => {
        props.setSelectedCoupon(coupon);
        props.setIsViewOpen(true);
    }

    return (
        <div className="coupon-card" onClick={()=>viewCoupon()}>
            <img src={process.env.REACT_APP_API_URL + "image/" + coupon.imagePath} alt={imageAlt} className="coupon-image" />
            <div className="coupon-info">
                <h3>{coupon.name}</h3>
                <p>{coupon.brand}</p>
                <p>{coupon.expirationDate}</p>
                <button className="days-left">D-{coupon.dateDiff}</button>
            </div>
            <button className="delete-button" onClick={() => deleteCoupon()}>🗑</button>
        </div>
    );
};

export default CouponBox;
