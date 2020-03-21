import React from 'react'

import { Badge } from 'antd';

import 'antd/dist/antd.css';

export const SBadge = ({ children, ...props }) => {
    return (
        <Badge style={{ width: '100%' }} {...props}>
            {children}
        </Badge>
    )
}