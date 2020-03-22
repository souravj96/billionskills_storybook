import React from 'react'

import { Avatar } from 'antd'

export const SAvatar = ({ children, ...props }) => (
    <Avatar {...props}>
        {children}
    </Avatar>
)