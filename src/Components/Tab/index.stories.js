import React from 'react'

import { STabPane, STabs } from './index'

export default {
    title: 'Tabs',
};

export const BasicTab = () =>
    <STabs defaultActiveKey="1">
        <STabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
    </STabPane>
        <STabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
    </STabPane>
        <STabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
    </STabPane>
    </STabs>