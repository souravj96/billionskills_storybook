import React from 'react'

import { Input } from 'antd';

import 'antd/dist/antd.css';

export const SInput = ({ children, ...props }) => {
    return (
        <Input {...props}>{children}</Input>
    )
}