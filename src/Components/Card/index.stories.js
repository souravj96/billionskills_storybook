import React from 'react'

import { SCard } from './index'

export default {
    title: 'Card',
};

export const BasicCard = () =>
    <SCard title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </SCard>