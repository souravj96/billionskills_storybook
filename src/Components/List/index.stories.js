import React from 'react'

import { SList, SListItem } from './index'

export default {
    title: 'List',
};

export const BasicList = () =>
    <SList bordered>
        <SListItem>Item 1</SListItem>
        <SListItem>Item 2</SListItem>
    </SList>