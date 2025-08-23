import React, { useEffect, useState, useRef } from "react";
import imageAlt from '../../static/image-alt.png';
import { customAxios } from "../../common/CustomAxios";
import { useNavigate } from 'react-router-dom';
import { customConfirm, getUserId } from "../../common/Util";


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
//getCoupons
const SharedCouponBox = (props) => {
    const navigate = useNavigate();
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [overLayStyle, setOverLayStyle] = useState();

    const imageRef = useRef(null);

    useEffect(() => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            const style = {
                top: rect.top + "px",
                left: rect.left + "px",
                width: rect.width + "px",
                height: rect.height + "px",
                borderRadius: "8px",
                fontSize: "24px"
            };
            setOverLayStyle(style)
        }
    }, []); // 렌더 후 한 번 실행

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

    }

    const updateCoupon = () => {

    }

    const viewCoupon = () => {
        props.setSelectedCoupon(props.coupon);
        props.setIsViewOpen(true);
    }

    const stopShareCoupon = (gifticonId) => {
        getUserId()
        // if (customConfirm("공유를 중단할까요?")) {
        //     customAxios.patch("/gifticon/group", { id: coupon.id })
        //         .then(() => {
        //             //다시 불러오기?
        //             props.getCoupons();
        //         })
        //         .catch()
        // }
    }

    return (
        <div className="coupon-card">
            <img src={process.env.REACT_APP_API_URL + "image/" + coupon.imagePath}
                alt={imageAlt}
                className="coupon-image"
                ref={imageRef}
            />
            <div className="coupon-info" onClick={() => viewCoupon()}>
                <h3>{coupon.name}</h3>
                <p>{coupon.brand}</p>
                <p>{coupon.expirationDate}</p>
                <button className="days-left">D-{coupon.dateDiff}</button>
                <span>&nbsp;</span>
                {props.coupon.gifticonIsUsed === "Y" && (<button className="coupon-used">사용</button>)}
            </div>

            {/* 삭제/수정 버튼 수직으로 정렬하기 */}
            <div className="verticalAlign">
                {/* <button className="delete-button" onClick={() => deleteCoupon()}>🗑️</button>
                <button className="edit-button" onClick={() => updateCoupon()}>✏️</button> */}
                {/* 원래 기프티콘 주인만 할 수 있도록 수정 */}
                <button className="edit-button" onClick={() => { stopShareCoupon() }}>👨‍👩‍👧‍👦</button>
            </div>
        </div>
    );
};

export default SharedCouponBox;
