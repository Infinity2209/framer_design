import React from 'react';

const AnimatedIcon = () => {
    return (
        <div className="animated-icon-container" style={{ textAlign: 'center', margin: '1rem 0' }}>
            <dotlottie-player
                src="https://framerusercontent.com/assets/5agvGTKvDzdOMKNfAqox82a1LVE.json"
                autoplay
                loop
                background="rgba(0, 0, 0, 0)"
                speed="1"
                direction="1"
                style={{ height: '100px', width: '100px', margin: '0 auto' }}
            ></dotlottie-player>
        </div>
    );
};

export default AnimatedIcon;
