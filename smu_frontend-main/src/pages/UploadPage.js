import React from "react";
import styled from 'styled-components';

import Headerindex from "../component/index/header";
import Uploadmain from "../component/upload/upload_main";
import Footerindex from "../component/index/footer";

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
  margin: 0 auto; /* 마진: 0(상하) auto(좌우 마진값 오토로 가운데 정렬) */
  background-color: #FFFFFF;
  z-index: -3;
`;

export default function UploadPage() {
    return (
        <>
            <Background>
                <Rectangle>
                    {<Headerindex />}
                    {<Uploadmain />}
                    {<Footerindex />}
                </Rectangle>
            </Background>
        </>
    )
}