import React from 'react'

import { Tabs } from 'antd'

const { TabPane } = Tabs;

export const STabs = ({ children, ...props }) => (
    <Tabs {...props}>
        {children}
    </Tabs>
)

export const STabPane = ({ children, ...props }) => (
    <TabPane {...props}>
        {children}
    </TabPane>
)