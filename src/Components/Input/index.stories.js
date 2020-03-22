import React from 'react'

import { SInput, SSearch } from './index'

export default {
    title: 'Input',
};

export const BasicInput = () =>
    <SInput placeholder="Basic usage" />

export const SearchInput = () =>
    <SSearch placeholder="input search text" enterButton />