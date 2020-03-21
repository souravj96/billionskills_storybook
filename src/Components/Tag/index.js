import React from 'react'

import { Tag } from 'antd';

import 'antd/dist/antd.css';

export const STag = ({ children, ...props }) => {
    return (
        <Tag style={{ width: '100%' }} {...props}>
            {children}
        </Tag>
    )
}