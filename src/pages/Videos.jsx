import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Videos = () => {
    const [text, setText] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`, {})
        setText('');
    }

    return (
        <>
            <h1>Videos</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="video id" value={text} onChange={handleChange}/>
            </form>
        </>
    );
};

export default Videos;