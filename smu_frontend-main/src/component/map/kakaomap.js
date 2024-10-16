import React, {useState } from 'react';
import styled from 'styled-components';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const Section1 = styled.div`
  background-color: #f3f3f3;
  width: 60%;
  height: 40%;
  border-radius: 24px;
  margin: 2% auto;
`;

const KakaoMap = ({ Address }) => {
    const [coords, setCoords] = useState({ lat: 37.506320759000715, lng: 127.05368251210247 });
    if (!window.kakao) {
        console.error('Kakao Maps API is not loaded');
        return;
    }

    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(Address, (result, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
        const newCoords = {
          lat: parseFloat(result[0].y),
          lng: parseFloat(result[0].x),
        };
        setCoords(newCoords);
    } else {
        console.error('Geocode was not successful for the following reason:', status);
    }
    });

  return (
    <Section1>
      <Map center={coords} style={{ width: '100%', height: '100%' }}>
        <MapMarker position={coords} />
      </Map>
    </Section1>
  );
};

export default KakaoMap;
