import React, { useEffect, useState } from "react";
import { isEmpty } from '../../common/Util';

//[selectedCoupon, setSelectedCoupon]
const CouponViewer = (props) => {
    const goBack = () => {
        //props.setSelectedCoupon(null);
        props.setIsViewOpen(false);
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
                />
            </div>
            <div className="bottom-section">
                <button className="share-button">친구와 공유</button>
                <button className="complete-button">사용완료</button>
                <button className="download-button">⬇</button>
                <button className="trash-button">🗑</button>
            </div>
        </div>
    );
};

export default CouponViewer;
