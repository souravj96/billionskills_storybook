import React from 'react'

import { SCollapse, SPanel } from './index'

export default {
    title: 'Collapse',
};

export const BasicCollapse = () =>
    <SCollapse defaultActiveKey={['1']}>
        <SPanel header="This is panel header 1" key="1">
            <p>A dog is a type of domesticated animal.</p>
        </SPanel>
        <SPanel header="This is panel header 2" key="2">
            <p>A dog is a type of domesticated animal.</p>
        </SPanel>
        <SPanel header="This is panel header 3" key="3" disabled>
            <p>A dog is a type of domesticated animal.</p>
        </SPanel>
    </SCollapse>