import React from 'react'

import { SSteps, SStep } from './index'

export default {
    title: 'Steps',
};

export const BasicSteps = () =>
    <SSteps >
        <SStep title="One"/>
        <SStep title="Two"/>
        <SStep title="Three"/>
    </SSteps>;