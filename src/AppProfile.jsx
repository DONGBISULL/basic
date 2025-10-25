import React from 'react';
import Profile from "./components/Profile.jsx";

const AppProfile = () => {
    const handleClick = (event) => {
        console.log(event);
        alert("버튼 클릭");
    }
    return (
        <>
            <button onClick={handleClick}>버튼
            </button>
            <Profile
                image='https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
                name='강아지'
                title='귀여운 강아지'
            />
            <Profile
                image='https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
                name='강아지2'
                title='바다 강아지'
                isNew={true}
            />
        </>
    );
};

export default AppProfile;