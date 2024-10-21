import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from "react";
import { Routes, Route, useLocation} from 'react-router-dom';
import axios from 'axios';

import Headerlogin from "../component/login/login_header";
import Headerindex from "../component/index/header";
import Mainindex from "../component/index/main";
import Footerindex from "../component/index/footer";
import Kakaologin from "../component/login/login_main";
import Uploadmain from "../component/upload/upload_main";
import Redirection from '../component/login/redirection';
import Makermain from '../component/maker/madeby';
import Buy from '../component/register/buy';
import BoardDetail from '../component/board/BoardDetail';
import BoardList from '../component/board/BoardList';
import List from '../component/trade/list'
import UpBoard from '../component/boardup/Upboard';
import Selectpurchase from '../component/register/selectpurchase';
import Purchase from '../component/register/purchase';
import Input from '../component/boardup/input';
import ChatRoom from '../component/chatroom/chatroom'; //이민정 수정
    

const Background = styled.div`
    background-color: #F8F9FA;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
`;

const Rectangle = styled.div`
  width: 60%;
  max-width: 100%;
  height: 100vh;
  overflow: auto;
  margin: 0 auto; /* 마진: 0(상하) auto(좌우 마진값 오토로 가운데 정렬) */
  background-color: #FFFFFF;
  z-index: -3;
`;


function AppRouter() {
    // UseState
    const [hasToken, setHasToken] = useState(false);
    const [userName, setUserName] = useState('');
    // Etc
    const location = useLocation();
    const hideHeaderAndFooter = location.pathname === '/map';

    const parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    };

    const checkHasToken = async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/jwt-token-auth/verify/",
                { token: localStorage.getItem("access_token")},
            );

            if (response.status === 200) {
                console.log("클리어")
                const name = parseJwt(localStorage.getItem("access_token")).name;
                setHasToken(true);
                setUserName(name);
            }
            else{
                console.error("Token verification failed. Unexpected status code:");
            }
            
        } catch (error) {
            console.error("Token verification failed:", error);
        }
    };

    useEffect(() => {
        checkHasToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    return (
        <Background>
            <Rectangle>
                {!hideHeaderAndFooter && (hasToken ? <Headerlogin name={userName} /> : <Headerindex />)}
                <Routes>
                    <Route path="/" element={<Mainindex />} />
                    <Route path="/upload" element={<Uploadmain />} />
                    <Route path="/kakao_login" element={<Kakaologin />} />
                    <Route path="/aboutus" element={<Makermain />} />
                    <Route path="/oauth" element={<Redirection />} />
                    <Route path="/buy" element={<Buy />} />
                    <Route path="/board" element={<BoardList/>}/>
                    <Route path="/board/:idx" element={<BoardDetail/>}/>
                    <Route path="/list" element={<List/>}/>
                    <Route path="/upboard" element={<UpBoard/>}/>
                    <Route path="/selectpurchase" element={<Selectpurchase/>}/>
                    <Route path="/Purchase" element={<Purchase/>}/>
                    <Route path="/Input" element={<Input/>}/>
                    <Route path="/chat/:username" element={<ChatRoom />} />

                </Routes>
                {!hideHeaderAndFooter && <Footerindex />}
            </Rectangle>
        </Background>
    );
}

export default AppRouter;