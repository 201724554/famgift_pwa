import React, { useEffect, useRef, useState } from "react";
import CategoryContainer2 from "../category/CategoryContainer2";
import BackBtn from "../../common/BackBtn";
import Camera from "../../static/camera.png";
import { customAxios } from "../../common/CustomAxios";
import { useLocation, useNavigate } from 'react-router-dom';
import { isEmpty } from "../../common/Util";


const CouponRegister = () => {
  const location = useLocation();
  const [couponInfo, setCouponInfo] = useState({
    id: !isEmpty(location.state) ? location.state.coupon.id : "",
    barcode: !isEmpty(location.state) ? location.state.coupon.barcode : "",
    productName: !isEmpty(location.state) ? location.state.coupon.name : "",
    brand: !isEmpty(location.state) ? location.state.coupon.brand : "",
    expirationDate: !isEmpty(location.state) ? location.state.coupon.expirationDate : "",
    categories: !isEmpty(location.state) ? location.state.coupon.categoryIds : []
  });
  const [selectedCategories, setSelectedCategories] = useState(
    !isEmpty(location.state) ? location.state.coupon.categoryIds : []
  );
  const [image, setImage] = useState();
  const [fileToSend, setFileToSend] = useState();
  const [fileInfo, setFileInfo] = useState();
  const [update, setUpdate] = useState("N");
  const fileInputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isEmpty(location.state)) {
      setUpdate("Y");
    }
  }, []);

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

  const setInitValue = (id) => {
    let val = '';
    if (!isEmpty(location.state)) {
      if (id === 'barcode') {
        val = location.state.coupon.barcode;
      }
      if (id === 'brand') {
        val = location.state.coupon.brand;
      }
      if (id === 'productName') {
        val = location.state.coupon.name;
      }
      if (id === 'expirationDate') {
        val = location.state.coupon.expirationDate;
      }
    }
    return val;
  }

  useEffect(() => {
    //console.log(selectedCategories)
    //선택한 카테고리가 바뀔 때 마다 업데이트 수행
    setCouponInfo({ ...couponInfo, ["categories"]: selectedCategories });
  }, [selectedCategories])

  const onSubmitBtnClick = () => {
    if (update === 'Y') {
      customAxios.patch(process.env.REACT_APP_API_URL + "gifticon/update", couponInfo)
        //.then(() => navigate("/"))
        .catch();
    }
    else {//setState의 비동기 동작으로 인해 이전 상태 전송
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
    }
  };

  const goBack = () => {
    navigate("/");
  }

  return (
    <div className="coupon-register">
      <div className="top-section">
        <BackBtn/>
      </div>
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
      {
        update === "N"
          ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px" }}>
            <img
              style={{ width: '15%', border: "2px solid #ccc", borderRadius: "5px" }}
              src={Camera}
              onClick={onFileInputClick}
            />
          </div>
          : <></>
      }
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
                ? <input type="date" id={id} name={id} onChange={handleInputChange} defaultValue={setInitValue(id)} />
                : <input type="text" id={id} name={id} onChange={handleInputChange} defaultValue={setInitValue(id)} />
            }
          </div>
        ))}

        <div className="form-group">
          <label htmlFor="category">카테고리(최대 3개)</label>
          <CategoryContainer2 selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
        </div>

        <div className="form-actions">
          {/* <button type="button" className="share-button">친구와 공유</button> */}
          <button onClick={onSubmitBtnClick} className="register-button">
            {update === 'N' ? '+ 쿠폰 등록' : '쿠폰 수정'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponRegister;
