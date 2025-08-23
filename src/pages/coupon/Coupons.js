import React, { useEffect, useState } from "react";
import CategoryContainer from '../category/CategoryContainer.js';
import CouponsSearch from './CouponsSearch.js';
import CouponsContainer from './CouponsContainer.js';
import CouponsTail from './CouponsTail.js';
import CouponViewer from './CouponViewer.js';
import { customAxios } from "../../common/CustomAxios.js";
import { isEmpty } from '../../common/Util';


const CouponList = () => {
  const [categories, setCategories] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCoupon, setSelectedCoupon] = useState();
  const [isViewOpen, setIsViewOpen] = useState(false);

  useEffect(() => {
    getCategories();
    getCoupons(selectedCategories);
  }, []);

  useEffect(() => {
    //viewImage(selectedCoupon);
  }, [isViewOpen])

  useEffect(() => {
    //카테고리 별 재조회
    setCoupons([]);
    getCoupons();
  }, [selectedCategories])

  const getCategories = () => {
    customAxios.get("category")
      .then(
        (response) => {
          setCategories(response.data);
        }
      )
      .catch((err) => console.log(err))
  }

  const getCoupons = () => {
    customAxios.get("gifticon?" + getReqParam())
      .then((response) => {
        setCoupons(response.data);
      })
      .catch((err) => console.log(err))
  }

  const getReqParam = () => {
    const reqParam = selectedCategories.map(n => `categories=${n}`).join('&');
    return reqParam; 
  }


  return (
    <div className="coupon-list-container">
      {isViewOpen === false
        ?
        <div>
          <CategoryContainer
            categories={categories}
            setCategories={setCategories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            getCategories={getCategories} />
          {/* <CouponsSearch /> */}
          <CouponsContainer
            coupons={coupons}
            setCoupons={setCoupons}
            getCoupons={getCoupons}
            setSelectedCoupon={setSelectedCoupon}
            setIsViewOpen={setIsViewOpen} />
          <CouponsTail />
        </div>
        :
        <CouponViewer
          selectedCoupon={selectedCoupon}
          setSelectedCoupon={setSelectedCoupon}
          setIsViewOpen={setIsViewOpen}
          getCoupons={getCoupons}
        />
      }
    </div>
  );
};

export default CouponList;
