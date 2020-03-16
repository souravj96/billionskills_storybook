
import React from 'react';
import Lottie from 'react-lottie'
import icons from './Data/rootFile'
import './style.css';

export const SLottie = ({ children, ...props }) => {
    let iconType = props.type
    let animData = icons[iconType].default
    return (
        <>
            <Lottie options={{
                loop: !props.loop ? true : props.loop,
                autoplay: !props.autoplay ? true : props.autoplay,
                animationData: animData
            }}
                speed={!props.speed ? 1 : props.speed}
                height={!props.height ? 50 : props.height}
                width={!props.width ? 50 : props.width}
                style={!props.style ? {} : props.style} 
                className={!props.className ? "" : props.className}/>
            <div className="s-lottie-text font-hind">
                {children}
            </div>
        </>
    )
}