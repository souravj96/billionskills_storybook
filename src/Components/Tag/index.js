import React from 'react'

import { Tag } from 'antd';

import 'antd/dist/antd.css';

export const STag = ({ children, ...props }) => {
    return (
        <Tag {...props}>
            {children}
        </Tag>
    )
}