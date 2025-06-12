import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimatedIcon = ({ animationPath }) => {
    const container = useRef(null);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: animationPath,
        });

        return () => anim.destroy();
    }, [animationPath]);

    return <div ref={container} style={{ width: 150, height: 150, margin: '0 auto' }} />;
};

export default LottieAnimatedIcon;
