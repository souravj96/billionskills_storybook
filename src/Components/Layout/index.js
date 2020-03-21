import React from 'react'

import { Layout} from 'antd';

import 'antd/dist/antd.css';
import './style.css'

const { Header, Content, Footer, Sider } = Layout;

export const SLayout = ({children, ...props})=>{
    return (
    <Layout {...props}>{children}</Layout>
    )
}

export const SHeader = ({children, ...props})=>{
    return (
    <Header {...props}>{children}</Header>
    )
}

export const SContent = ({children, ...props})=>{
    return (
    <Content {...props}>{children}</Content>
    )
}

export const SFooter = ({children, ...props})=>{
    return (
    <Footer {...props}>{children}</Footer>
    )
}

export const SSider = ({children, ...props})=>{
    return (
    <Sider {...props}>{children}</Sider>
    )
}