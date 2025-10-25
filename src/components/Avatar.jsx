import React from 'react';

const Avatar = ({image, isNew}) => {
    return (
        <div className="avatar">
            <img className="photo"
                 src={image}
                 alt="avatar"
            />
            {
                isNew ? (<span className="new">new</span>) : null
            }
        </div>
    );
};

export default Avatar;