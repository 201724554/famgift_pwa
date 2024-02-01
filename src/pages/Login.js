import '../css/Login.css';
import kakaoLogin from '../static/kakao_login_medium_narrow.png';
import TestImg from '../static/TEST.png';

function Login() {
    return (
        <div className='MainFlex'>
            <div>
                <img style={{height: '100px'}} src={TestImg}/>
            </div>
            <div>
                <img className='BtnImg' src={kakaoLogin}/>
            </div>
        </div>
    );
}

export default Login;