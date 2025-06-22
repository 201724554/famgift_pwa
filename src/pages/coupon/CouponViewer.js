import React, { useState, useEffect, useRef } from "react";
import { isEmpty } from '../../common/Util';
import { customAxios } from "../../common/CustomAxios.js";


//[selectedCoupon, setSelectedCoupon]
const CouponViewer = (props) => {
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
                fontSize: "40px"
            };
            setOverLayStyle(style);
        }
    }, []); 

    const goBack = () => {
        //props.setSelectedCoupon(null);
        props.setIsViewOpen(false);
    }

    const _useCoupon = () => {
        customAxios.patch("gifticon/use", { id: props.selectedCoupon.id })
            .then(
                () => {
                    goBack();
                    props.getCoupons();
                }
            )
            .catch((err) => console.log(err))
    }

    const reuseCoupon = () => {
        customAxios.patch("gifticon/reuse", { id: props.selectedCoupon.id })
            .then(
                () => {
                    goBack();
                    props.getCoupons();
                }
            )
            .catch((err) => console.log(err))
    }

    return (
        <div className="container">
            <div className="top-section">
                <button className="back-button" onClick={() => goBack()}>←</button>
                <button className="fullscreen-button" onClick={() => { }}>⛶</button>
            </div>
            <div className="middle-section">
                {/* 여기에 이미지가 들어갑니다 */}
                <img
                    src={isEmpty(props.selectedCoupon) ? "" : process.env.REACT_APP_API_URL + "image/" + props.selectedCoupon.imagePath}
                    alt="미리보기 이미지"
                    className="preview-image"
                    ref={imageRef}
                />
                {props.selectedCoupon.gifticonIsUsed === "Y" && (<div className="overlay" style={overLayStyle}>사용</div>)}
            </div>
            <div className="bottom-section">
                <button className="share-button">친구와 공유</button>
                {
                    props.selectedCoupon.gifticonIsUsed === "N"
                        ?
                        <button className="complete-button" onClick={() => _useCoupon()}>사용완료</button>
                        :
                        <button className="complete-button" onClick={() => reuseCoupon()}>미사용처리</button>
                }
                {/* <button className="download-button">⬇</button>
                <button className="trash-button">🗑</button> */}
            </div>
        </div>
    );
};

export default CouponViewer;
