import React from 'react'

import { Input } from 'antd';

import 'antd/dist/antd.css';

const { Search } = Input

export const SInput = ({ children, ...props }) => {
    return (
        <Input {...props}>{children}</Input>
    )
}

export const SSearch = ({ children, ...props }) => {
    return (
        <Search {...props}>{children}</Search>
    )
}