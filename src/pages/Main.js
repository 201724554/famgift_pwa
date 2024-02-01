import '../css/Main.css';
import { Link } from 'react-router-dom';
import kakaoLogin from '../static/kakao_login_medium_narrow.png';

function Main() {
  /*
  if logged in -> render Main
  else redirect to loggin page
  */

  return (
    <div className='mainContainer'>
        MAIN
        <button type="button" onClick={()=>console.log("kakao")}>
          <img src={kakaoLogin}></img>
        </button>
        <br/>
        <Link to="sub">TO SUB</Link>
    </div>
  );
}

export default Main;
