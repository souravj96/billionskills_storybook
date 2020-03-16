import React from 'react'

import { Steps } from 'antd';

import 'antd/dist/antd.css';

const { Step } = Steps;

export const SSteps = ({children, ...props})=>{
    return (
    <Steps {...props}>{children}</Steps>
    )
}

export const SStep = ({children, ...props})=>{
    return (
    <Step {...props}>{children}</Step>
    )
}