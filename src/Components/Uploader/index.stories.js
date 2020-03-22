import React from 'react'

import { SUploader, SDropUploader } from './index'

export default {
    title: 'Uploader',
};

export const BasicUploader = () =>
    <SUploader action="#">
        <p>Upload</p>
    </SUploader>

export const DropUploader = () =>
    <SDropUploader action="#"/>