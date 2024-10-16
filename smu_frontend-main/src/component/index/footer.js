import React from 'react';
import styled  from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Home from '../../images/home.png';
import Tip from '../../images/tip.png';
import Person from '../../images/person.png';

const Section3 = styled.div`
    width: 60%;
    height: 7%;
    margin: 0 auto;
    background: #F3F3F3;

    color: #858585;
    font-family: "Spoqa Han Sans Neo";
    font-size: 0.8vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;


    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    position : fixed;
    bottom : 0;
`;

const ImgHome = styled.div`
    cursor: pointer;
`;

const ImgTip = styled.div`
    cursor: pointer;
`;

const ImgPerson = styled.div`
    cursor: pointer;
`;

const Footerindex = () => {
  const navigate = useNavigate();
  function navigateTomain(){
    navigate('/');
  }

  function navigateToaboutus(){
    navigate('/aboutus');
  }
    return (
      <Section3>
        <ImgHome>
          <img src={Home} onClick={navigateTomain} alt="홈" />
          <br />
          &nbsp;&nbsp;&nbsp;홈
        </ImgHome>
        <ImgTip>
          <img src={Tip} alt="팁" />
          <br />
          &nbsp;&nbsp;팁
        </ImgTip>
        <ImgPerson>
          <img src={Person} onClick={navigateToaboutus} alt="제작자" />
          <br />
          제작자
        </ImgPerson>
      </Section3>
    );
  }

export default Footerindex
