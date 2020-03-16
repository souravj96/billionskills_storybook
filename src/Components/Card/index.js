import React from 'react'

import { Card } from 'antd';

import 'antd/dist/antd.css';

export const SCard = ({ children, ...props }) => {
    return (
        <Card {...props}>{children}</Card>
    )
}