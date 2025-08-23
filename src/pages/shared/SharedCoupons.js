import React, { useEffect, useState } from "react";
import { customAxios } from "../../common/CustomAxios.js";
import { isEmpty } from '../../common/Util';
import SharedCouponsContainer from "./SharedCouponsContainer.js";
import SharedCouponGroupContainer from "./SharedCouponGroupContainer.js";
import SharedCouponViewer from './SharedCouponViewer.js';


const SharedCouponList = () => {
  const [groups, setGroups] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [selectedCoupon, setSelectedCoupon] = useState();
  const [isViewOpen, setIsViewOpen] = useState(false);

  useEffect(() => {
    getGroups();
  }, []);

  useEffect(() => {
    //viewImage(selectedCoupon);
  }, [isViewOpen])

  useEffect(() => {
    setCoupons([]);
    getCoupons();
  }, [selectedGroups])

  const getGroups = () => {
    customAxios.get("group")
      .then(
        (response) => {
          setGroups(response.data);
        }
      )
      .catch()
  }

  const getCoupons = () => {
    customAxios.get("group/gifticon?" + getReqParam())
      .then((response) => {
        console.log(response.data)
        setCoupons(response.data);
      })
      .catch()
  }

  const getReqParam = () => {
    const reqParam = selectedGroups.map(n => `groupIds=${n}`).join('&');
    return reqParam;
  }


  return (
    <div className="coupon-list-container">
      {isViewOpen === false
        ?
        <div>
          <SharedCouponGroupContainer
            groups={groups}
            selectedGroups={selectedGroups}
            setSelectedGroups={setSelectedGroups}
          />
          <SharedCouponsContainer
            coupons={coupons}
            setCoupons={setCoupons}
            getCoupons={getCoupons}
            setSelectedCoupon={setSelectedCoupon}
            setIsViewOpen={setIsViewOpen}
          />
        </div>
        :
        <SharedCouponViewer
          selectedCoupon={selectedCoupon}
          setSelectedCoupon={setSelectedCoupon}
          setIsViewOpen={setIsViewOpen}
          getCoupons={getCoupons}
        />
      }
    </div>
  );
};

export default SharedCouponList;
