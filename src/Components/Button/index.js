import React from 'react'

import { Button } from 'antd';

import 'antd/dist/antd.css';

export const SButton = ({ children, ...props }) => {
    return (
        <Button {...props}>
            {children}
        </Button>
    )
}