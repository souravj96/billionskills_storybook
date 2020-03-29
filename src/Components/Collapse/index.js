import React from 'react'

import { Collapse } from 'antd'

const { Panel } = Collapse;

export const SCollapse = ({ children, ...props }) => (
    <Collapse {...props}>
        {children}
    </Collapse>
)

export const SPanel = ({ children, ...props }) => (
    <Panel {...props}>
        {children}
    </Panel>
)