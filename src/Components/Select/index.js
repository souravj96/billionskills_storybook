import React from 'react'

import { Select, Form } from 'antd';

import 'antd/dist/antd.css';

const { Option } = Select;

export const SSelect = ({ children, ...props }) => {
    return (
        <Form.Item>
            <Select style={{width:'100%'}} {...props}>
                {children}
            </Select>
        </Form.Item>
    )
}

export const SSelectOption = ({ children, ...props }) => {
    return (
        <Option {...props}>
            {children}
        </Option>
    )
}