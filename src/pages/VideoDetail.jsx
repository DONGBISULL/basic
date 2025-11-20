import React from 'react';
import {useParams} from "react-router-dom";

const VideoDetail = () => {
    // const params = useParams();
    // console.log(params);
    const {videoId} = useParams();
    return (
        <>
            <h1>Videos Detail {videoId} </h1>
        </>
    );
};

export default VideoDetail;