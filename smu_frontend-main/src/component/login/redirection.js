import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Redirection = () => {
    const AUTHORIZE_CODE = new URL(window.location.href).searchParams.get("code");
    const navigate = useNavigate();

    if (AUTHORIZE_CODE) {
        axios.post("http://127.0.0.1:8000/oauth/",{
            AUTHORIZE_CODE
        })
        .then(response => {
            const accessToken = response.data.access;
            const refreshToken = response.data.refresh;
            // access 토큰은 로컬스토리지에 저장
            localStorage.setItem('access_token', accessToken)
            // refresh 토큰은 쿠키에 저장
            document.cookie = `refresh_token=${refreshToken}; path/;`;
            navigate('/');
        })
        .catch(error => {
            console.error("오류났음", error); 
        });
    } else {
        console.error("코드가 없습니다."); 
    }
};

export default Redirection;