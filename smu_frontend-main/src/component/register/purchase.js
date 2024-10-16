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
const Section2 = styled.div`
    width : 100%;
    height : 75%;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 70%;
    height: 35%;
    text-align: center;
    background-color: #fff;
    padding: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15)
    }
`

const Title = styled.div`
    color: #333;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.5vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    margin-bottom: 4%;
`

const Img = styled.img`
    margin-bottom: 6%;
`

const Buttongroup = styled.div`
    display: flex;
    justify-content: space-around;
`

const Button = styled.div`
    padding: 2% 4%;
    border: none;
    border-radius: 25px;
    background-color: #D0EBFF;
    color: white;

    font-family: "Spoqa Han Sans Neo";
    font-size: 1.0vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    
    &:hover {
        background-color: #19254D;
        transform: scale(1.05);
    }
`

const Purchase = () => {
    const navigate = useNavigate();
    
    function navigateToselectpurchase(){
        navigate('/selectpurchase');
    }

    return (
        <>
            <Section1>
                <Back onClick={navigateToselectpurchase}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                </Back>
                <Text1>
                    간편하게 등기부등본도 함께 등록해보세요.  
                </Text1>
            </Section1>
            <Section2>
                <Container>
                    <Title>등기부등본을 구매하시겠습니까?</Title>
                    <Img src={book}></Img>
                    <Buttongroup>
                        <Button onClick={() => alert('등기부등본 구매 페이지로 이동합니다.')}>등기부등본 구매하러 가기</Button>
                    </Buttongroup>
                </Container>
            </Section2>
        </>
    );
}

export default Purchase;