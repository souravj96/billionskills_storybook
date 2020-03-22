import React from 'react'

import { Carousel } from 'antd'

export const SCarousel = ({ children, ...props }) => (
    <Carousel autoplay {...props}>
        {children}
    </Carousel>
)