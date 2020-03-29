import React from 'react'

import { List } from 'antd'

const { Item } = List;

export const SList = ({ children, ...props }) => (
    <List {...props}>
        {children}
    </List>
)

export const SListItem = ({ children, ...props }) => (
    <Item {...props}>
        {children}
    </Item>
)