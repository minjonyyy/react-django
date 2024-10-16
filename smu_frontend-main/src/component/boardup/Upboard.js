import React, { useState } from 'react';
//import axios from 'axios';

const UpBoard = () => {


    const [inputs, setInputs] = useState({
        email: "",
        title: "",
        content: "",
        price: "",
        region: "",
        address: "",
        size: "",
        direction: "",
        availability: "",
        floor: "",
        apart: "",
    });

    const parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
            email: parseJwt(localStorage.getItem("access_token")).email
        }); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs)
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" name="title" value={inputs.title} onChange={handleChange} />
                <br />

                <label>Content</label>
                <input type="text" name="content" value={inputs.content} onChange={handleChange} />
                <br />

                <label>Price</label>
                <input type="text" name="price" value={inputs.price} onChange={handleChange} />
                <br />

                <label>Region</label>
                <input type="text" name="region" value={inputs.region} onChange={handleChange} />
                <br />

                <label>Address</label>
                <input type="text" name="address" value={inputs.address} onChange={handleChange} />
                <br />

                <label>Size</label>
                <input type="text" name="size" value={inputs.size} onChange={handleChange} />
                <br />

                <label>Direction</label>
                <input type="text" name="direction" value={inputs.direction} onChange={handleChange} />
                <br />

                <label>Availability</label>
                <input type="text" name="availability" value={inputs.availability} onChange={handleChange} />
                <br />

                <label>Floor</label>
                <input type="text" name="floor" value={inputs.floor} onChange={handleChange} />
                <br />

                <label>Apart</label>
                <input type="text" name="apart" value={inputs.apart} onChange={handleChange} />
                <br />

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default UpBoard;
