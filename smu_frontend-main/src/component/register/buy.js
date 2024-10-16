import React from 'react';
import styled from 'styled-components';
import book from '../../images/book.png';

import { useNavigate } from 'react-router-dom';

const Section1 = styled.div`
    width : 100%;
    height : 8%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Back = styled.div`
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.5vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    cursor: pointer;
`
const Text1 = styled.div`
    width: 75%;

    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.5vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const Text2 = styled.div`
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-top: 2%;
`
const Stroke1 = styled.div`
    width: 95%;
    height: 0.2%;
    margin: 0 auto;
    background-color: #000;

    margin-top: 1%;
`
const Section2 = styled.div`
    width: 95%;
    height: 8%;
    margin: 0 auto;
`
const Rectangle2 = styled.div`
    width:18%;
    height:100%;
    background-color: #F3F3F3;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Text3 = styled.div`
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: auto;
`
const Stroke2 = styled.div`
    width: 95%;
    height: 0.1%;
    margin: 0 auto;
    background-color: #000;
`
const Rectangle3 = styled.div`
    background-color: #F3F3F3;
    width: 60%;
    height: 40%;
    border-radius: 24px;

    margin: 5% auto;
`
const Img = styled.img`
    display: block; 
    margin: 0 auto; 
    padding-top: 15%;
`
const Buybuy = styled.div`
    width: 80%;
    height: 16%;
    background-color: #D0EBFF;
    border-radius: 24px;
    margin: 15% auto;
    
    color: #1864AB;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    display: flex;
    align-items: center; /* 수직 가운데 정렬 */
    justify-content: center; /* 수평 가운데 정렬 */

    cursor: pointer;
    
    &:hover {
        background-color: #19254D;
        color: white;
    }
`
const Next = styled.div`
    width: 95%;
    height: 5%;
    background-color: #19254D;
    border-radius: 24px;
    margin: 5% auto 0 auto;
    
    color: white;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    display: flex;
    align-items: center; /* 수직 가운데 정렬 */
    justify-content: center; /* 수평 가운데 정렬 */

    cursor: pointer;
`

const Buy = () => {
    const navigate = useNavigate();
    
    function navigateToupload(){
        navigate('/upload');
    }

    return (
        <>
            <Section1>
                <Back onClick={navigateToupload}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                </Back>
                <Text1>
                    간편하게 등기부등본도 함께 등록해보세요.  
                </Text1>
            </Section1>
            <Text2>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;등기부등본을 등록하시겠습니까?
            </Text2>
            <Stroke1>
            </Stroke1>
            <Section2>
                <Rectangle2>
                    <Text3>
                        등기부등본 구매
                    </Text3>
                </Rectangle2>
            </Section2>
            <Stroke2>
            </Stroke2>
            <Rectangle3>
                <Img src={book}></Img>
                <Buybuy>등기부등본 구매하러가기</Buybuy>
            </Rectangle3>
            <Next>
                다음
            </Next>
        </>
    );
}

export default Buy;

