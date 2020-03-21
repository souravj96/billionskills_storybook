import React from 'react'

import { SSelect, SSelectOption } from './index'

export default {
    title: 'Select',
};

export const DefaultSelect = () =>
<SSelect>
    <SSelectOption value="1">Option 1</SSelectOption>
    <SSelectOption value="2">Option 2</SSelectOption>
</SSelect>