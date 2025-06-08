import React, { useEffect, useRef, useState } from "react";
import CategoryContainer2 from "../category/CategoryContainer2";
import Camera from "../../static/camera.png";
import { customAxios } from "../../common/CustomAxios";
import { useNavigate } from 'react-router-dom';


const CouponRegister = () => {
  const [couponInfo, setCouponInfo] = useState({
    barcode: "",
    productName: "",
    brand: "",
    expirationDate: "",
    categories: []
  });
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [image, setImage] = useState();
  const [fileToSend, setFileToSend] = useState();
  const [fileInfo, setFileInfo] = useState();
  const fileInputRef = useRef();
  const navigate = useNavigate();

  const onFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileToSend(file);
    if (file) {
      setFileInfo({
        name: file.name,
        size: (file.size / 1024).toFixed(2) + " KB",
        type: file.type
      });
      const reader = new FileReader();
      // FileReader가 파일을 read하는 걸 완료했을 때 실행
      // file을 readAsDataURL로 함수로 읽으면 image state에 대상 파일 정보 설정
      reader.onload = (e) => {
        setImage(e.target.result);
      }
      reader.readAsDataURL(file);
    }
  }

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setCouponInfo((prevState) => ({
      ...prevState, [id]: value
    }));
  };

  useEffect(() => {
    //선택한 카테고리가 바뀔 때 마다 업데이트 수행
    setCouponInfo({ ...couponInfo, ["categories"]: selectedCategories });
  }, [selectedCategories])

  const onSubmitBtnClick = () => {
    //setState의 비동기 동작으로 인해 이전 상태 전송
    //setCouponInfo({ ...couponInfo, ["categories"]: selectedCategories });
    const formData = new FormData();
    if (image) {
      formData.append("image", fileToSend);
    }
    //formData.append("couponInfo", couponInfo);
    //참고: https://quddnd.tistory.com/225
    formData.append("couponInfo", new Blob([JSON.stringify(couponInfo)], { type: "application/json" }));
    //formData 전송 시 자동으로 "Content-Type": "multipart/form-data"으로 전송
    customAxios.post(process.env.REACT_APP_API_URL + "gifticon", formData)
      .then(() => navigate("/"))
      .catch();
  };

  return (
    <div className="coupon-register">
      <header className="header">
        <h1>쿠폰 등록</h1>
      </header>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px" }}>
        {image && <img src={image} alt="Preview" style={{ width: "200px", marginTop: "10px" }} />}
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px" }}>
        <img
          style={{ width: '15%', border: "2px solid #ccc", borderRadius: "5px" }}
          src={Camera}
          onClick={onFileInputClick}
        />
      </div>
      <div className="coupon-form">
        {[
          { id: "barcode", label: "바코드" },
          { id: "productName", label: "상품명" },
          { id: "brand", label: "사용처" },
          { id: "expirationDate", label: "유효기간" },
        ].map(({ id, label }) => (
          <div key={id} className="form-group">
            <label htmlFor={id}>{label}</label>
            {
              id === "expirationDate"
                ? <input type="date" id={id} name={id} onChange={handleInputChange} />
                : <input type="text" id={id} name={id} onChange={handleInputChange} />
            }
          </div>
        ))}

        <div className="form-group">
          <label htmlFor="category">카테고리(최대 3개)</label>
          <CategoryContainer2 selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
        </div>

        <div className="form-actions">
          {/* <button type="button" className="share-button">친구와 공유</button> */}
          <button onClick={onSubmitBtnClick} className="register-button">+ 쿠폰 등록</button>
        </div>
      </div>
    </div>
  );
};

export default CouponRegister;
