import React from 'react';
import { Upload, Icon, Modal } from 'antd';
import './style.less';

const Dragger = Upload.Dragger;
export default class GUpload extends React.PureComponent {
    state = {
        fileList: [],
        uploading: false,
        previewImage: '',
        previewVisible: false
    }
    constructor(props){
        super(props);
        this.state = {
            ...this.state,
            previewImage:props.value || '',
        }
    }
    readFile(file) {
        //判断是否是图片类型
        if (!/image\/\w+/.test(file.type)) {
            alert("只能选择图片");
            return false;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
            console.log('reader', e)
            this.setState({
                previewImage: e.target.result
            })
        }


    }
    uploadProps = {
        action: '/upload',
        beforeUpload: (file) => {
            console.log('beforUpload', file, this.setState)
            this.readFile(file);
            //customUpload(file);
            return false;
        },
        fileList: [],
    }

    handlePreview() {
        this.setState({
            previewVisible: true
        })
    }
    handleCancel() {
        this.setState({
            previewVisible: false
        })
    }
    handleDelete() {
        this.setState({
            previewImage: ''
        })
    }
    render() {
        const { previewImage, previewVisible } = this.state;
        return (
            <Dragger className={'article-form__dragger'} {...this.uploadProps} disabled={Boolean(previewImage)}>
                {
                    previewImage ?
                        (
                            <div className='upload-preview__wrapper'>
                                <img src={previewImage} alt="封面图" />
                                <div className="upload-preview__mask" onClick={e => false}>
                                    <span className='upload-preview__action'>
                                        <Icon type="eye" onClick={e => { this.handlePreview() }} />
                                        <Icon type="delete" onClick={e => { this.handleDelete() }} />
                                    </span>
                                </div>
                            </div>
                        )
                        :
                        (
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                            </p>
                        )
                }
                <Modal visible={previewVisible} width='50%' footer={null} onCancel={e => { this.handleCancel() }}>
                    <img src={previewImage} alt="封面图" />
                </Modal>
            </Dragger>
        )
    }
}