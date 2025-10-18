import { useSearchParams, useNavigate } from 'react-router-dom';
import { customAxios } from '../common/CustomAxios';
import { isEmpty } from '../common/Util';
import '../css/Login.css';
import kakaoLogin from '../static/kakao_login_medium_narrow.png';
import TestImg from '../static/TEST.png';
import { useEffect } from 'react';

function Login() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const code = searchParams.get('code');
        
        if(!isEmpty(code)) {
            customAxios.post(process.env.REACT_APP_LOGIN_URL + 'kakao', { 'code' : code }, { withCredentials: true })
            .then(
                (data) => {
                    console.log(data);
                    navigate("/");
                }
            )
            .catch((err) => console.log(err))
        }
    },[])

    function login() {
        console.log(process.env.REACT_APP_KAKAO_OAUTH_URI)
        customAxios.get(process.env.REACT_APP_KAKAO_OAUTH_URI)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }

    function test() {
        customAxios.get('http://localhost:8080/login/test', { withCredentials: true })
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }

    return (
        <div className='MainFlex'>
            {/* <div>
                <img style={{height: '100px'}} src={TestImg}/>
            </div> */}
            <div>
                <a href={process.env.REACT_APP_KAKAO_OAUTH_URI}><img className='BtnImg' src={kakaoLogin}/></a>
            </div>
        </div>
    );
}

export default Login;