import '../css/Main.css';
import Header from './Header.js'
import "../css/Header.css";
import "../css/Coupons.css";
import { Link } from 'react-router-dom';
import kakaoLogin from '../static/kakao_login_medium_narrow.png';
import { useEffect } from 'react';
import CouponList from './coupon/Coupons.js';

function Main() {

  return (
    <div>
      <Header/>
      <CouponList />
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
