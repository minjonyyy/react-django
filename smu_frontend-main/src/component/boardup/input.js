import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Section1 = styled.div`
    width: 100%;
    height: 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Back = styled.div`
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.5vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
`;
const Text1 = styled.div`
    width: 75%;
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.5vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const Form = styled.form`
    font-family: "Spoqa Han Sans Neo";
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1em;
`;
const Label = styled.label`
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.2vw;
    font-weight: 400;
    margin-bottom: 0.5em;
`;
const InputField = styled.input`
    font-family: "Spoqa Han Sans Neo";
    padding: 0.5em;
    font-size: 1vw;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
const TextArea = styled.textarea`
    font-family: "Spoqa Han Sans Neo";
    padding: 0.5em;
    font-size: 1vw;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
`;
const Select = styled.select`
    font-family: "Spoqa Han Sans Neo";
    padding: 0.5em;
    font-size: 1vw;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
const Option = styled.option`
    font-family: "Spoqa Han Sans Neo";
    padding: 0.5em;
    font-size: 1vw;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
const Button = styled.button`
    font-family: "Spoqa Han Sans Neo";
    padding: 0.75em;
    font-size: 1.2vw;
    color: white;
    background-color: #000;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1em;

    &:hover {
        background-color: #333;
    }
`;

const DealTypeButton = styled.button`
    font-family: "Spoqa Han Sans Neo";
    padding: 0.75em;
    font-size: 1.2vw;
    color: ${(props) => (props.active ? "white" : "#000")};
    background-color: ${(props) => (props.active ? "#000" : "#ccc")};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 0.5em;

    &:hover {
        background-color: ${(props) => (props.active ? "#333" : "#bbb")};
    }
`;

const ImagePreview = styled.img`
    max-width: 100px;
    height: auto;
    margin-top: 1em;
    border-radius: 4px;
`;

/* ------footer부분이 내용을 가려서 공백으로 추가했습니다.------ */
const Blank = styled.div` 
    width: 60%;
    height: 10%;
    margin: 0 auto; /*마진 : 0(상하) auto(좌우 마진값 오토로 가운데 정렬)*/
    background-color: #FFFFFF;
`;

const Input = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        region: '',
        apart: '',
        address: '',
        floor: '',
        area: '',
        direction: '',
        moveinDate: '',
        price: '',
        images: [],
        dealType: ''
    });

    const [imagePreviews, setImagePreviews] = useState([]);

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            const newImages = Array.from(files).slice(0, 5);
            const newImagePreviews = newImages.map(file => URL.createObjectURL(file));
            setFormData({
                ...formData,
                [name]: newImages
            });
            setImagePreviews(newImagePreviews);
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleDealTypeChange = (dealType) => {
        setFormData({
            ...formData,
            dealType
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // form submit logic
    };

    function navigateToupload() {
        navigate('/upload');
    }

    return (
        <>
            <Section1>
                <Back onClick={navigateToupload}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                </Back>
                <Text1>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;매물을 등록해보세요.
                </Text1>
            </Section1>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="title">제목</Label>
                <InputField type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} required />

                <Label htmlFor="content">매물 설명</Label>
                <TextArea id="description" name="content" rows="4" value={formData.content} onChange={handleInputChange} required />

                <Label htmlFor="region">지역</Label>
                <Select id="region" name="region" value={formData.region} onChange={handleInputChange} required>
                    <Option value="">선택하세요</Option>
                    <Option value="서울">서울</Option>
                    <Option value="인천">인천</Option>
                    <Option value="경기">경기</Option>
                    <Option value="부산">부산</Option>
                    <Option value="강원">강원</Option>
                    <Option value="대구">대구</Option>
                </Select>

                <Label htmlFor="apart">아파트 명</Label>
                <InputField type="text" id="apart" name="apart" value={formData.apart} onChange={handleInputChange} required />

                <Label htmlFor="address">주소</Label>
                <InputField type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />

                <Label htmlFor="floor">층</Label>
                <InputField type="number" id="floor" name="floor" value={formData.floor} onChange={handleInputChange} required />

                <Label htmlFor="size">면적 (㎡)</Label>
                <InputField type="number" id="size" name="size" value={formData.size} onChange={handleInputChange} required />

                <Label htmlFor="direction">주실 방향</Label>
                <Select id="direction" name="direction" value={formData.direction} onChange={handleInputChange} required>
                    <Option value="">선택하세요</Option>
                    <Option value="동향">동향</Option>
                    <Option value="서향">서향</Option>
                    <Option value="남향">남향</Option>
                    <Option value="북향">북향</Option>
                </Select>

                <Label>거래 유형</Label>
                <div>
                    <DealTypeButton type="button" active={formData.dealType === '매매'} onClick={() => handleDealTypeChange('매매')}>매매</DealTypeButton>
                    <DealTypeButton type="button" active={formData.dealType === '전세'} onClick={() => handleDealTypeChange('전세')}>전세</DealTypeButton>
                    <DealTypeButton type="button" active={formData.dealType === '월세'} onClick={() => handleDealTypeChange('월세')}>월세</DealTypeButton>
                </div>

                <Label htmlFor="availability">입주일자</Label>
                <InputField type="date" id="availability" name="availability" value={formData.availability} onChange={handleInputChange} required />

                <Label htmlFor="price">가격 (만원)</Label>
                <InputField type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} required />

                <Label htmlFor="images">이미지</Label>
                <InputField type="file" id="images" name="images" accept="image/*" onChange={handleInputChange} multiple required />
                <div>
                    {imagePreviews.map((preview, index) => (
                        <ImagePreview key={index} src={preview} alt={`Preview ${index + 1}`} />
                    ))}
                </div>

                <Button type="submit">등록하기</Button>
            </Form>
            <Blank></Blank>
        </>
    );
}

export default Input;
