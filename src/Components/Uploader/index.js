import React from 'react'

import { Form, Upload } from 'antd'

const normFile = e => {
    // console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

export const SDropUploader = ({ children, ...props }) => (
    <Form.Item label="Dragger">
        <Form.Item valuePropName="fileList" getValueFromEvent={normFile} noStyle>
            <Upload.Dragger name="files" action="/upload.do" {...props} >
                <p className="ant-upload-drag-icon">
                    {children}
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>
        </Form.Item>
    </Form.Item>
)

export const SUploader = ({ children, ...props }) => (
    <Form.Item>
        <Upload action="/upload.do" listType="picture" {...props}>
            {children}
        </Upload>
    </Form.Item>
)