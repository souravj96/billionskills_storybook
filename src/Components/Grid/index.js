import React from 'react'

import { Row, Col } from 'antd';

import 'antd/dist/antd.css';

export const SRow = ({ children, ...props }) => {
    return (
        <Row {...props}>{children}</Row>
    )
}

export const SCol = ({ children, ...props }) => {
    return (
        <Col {...props}>{children}</Col>
    )
}