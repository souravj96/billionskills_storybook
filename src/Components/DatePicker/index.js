import React from 'react'

import { DatePicker, Form } from 'antd';

import 'antd/dist/antd.css';

export const SDatePicker = ({ children, ...props }) => {
    return (
        <Form.Item>
            <DatePicker style={{width:'100%'}} {...props}>
                {children}
            </DatePicker>
        </Form.Item>
    )
}