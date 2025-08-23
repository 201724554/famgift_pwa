import '../css/Main.css';
import Header from './Header.js'
import "../css/Header.css";
import "../css/Coupons.css";
import { Link } from 'react-router-dom';
import kakaoLogin from '../static/kakao_login_medium_narrow.png';
import { useState, useEffect } from 'react';
import CouponList from './coupon/Coupons.js';
import GroupList from './group/Group.js';
import SharedCouponList from './shared/SharedCoupons.js';

function Main() {
  const [selectedHeader, setSelectedHeader] = useState("CouponList");
  const [component, setComponent] = useState(<CouponList />);

  useEffect(() => {
    switch (selectedHeader) {
      case "CouponList" : {
        setComponent(<CouponList/>);
        break;
      }
      case "GroupList" : {
        setComponent(<GroupList/>);
        break;
      }
      case "SharedCouponList" : {
        setComponent(<SharedCouponList/>)
        break;
      } 
      default: {
        setComponent(<>fd</>);
        break;
      }
    }
  }, [selectedHeader])


  return (
    <div>
      <Header
        selectedHeader={selectedHeader}
        setSelectedHeader={setSelectedHeader}
      />
      {component}
      {/* <div className='mainContainer'>
        MAIN
        <button type="button" onClick={() => console.log("kakao")}>
          <img src={kakaoLogin}></img>
        </button>
        <br />
        <Link to="sub">TO SUB</Link>
      </div> */}
    </div>
  );
}

export default Main;
