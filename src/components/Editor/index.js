import React from 'react';
import ReactQuill,  { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './style.less';
export default class Editor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultValue: props.value
        }
        this.quill = React.createRef();
    }

    modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'align': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }

    // formats = [
    //     'header',
    //     'bold', 'italic', 'underline', 'strike', 'blockquote',
    //     'list', 'bullet', 'indent',
    //     'link', 'image'
    // ]

    handleChange(value) {
        const { onChange } = this.props;
        const outputValue = {
            html: value,
            markdowns: value,
            text: value,
        }
        console.log(Quill)
        onChange && onChange(outputValue);
    }

    render() {
        return (
            <div style={this.props.style || null} className={'g-editor'}>
                <ReactQuill
                    ref={this.quill}
                    onChange={e => { this.handleChange(e) }}
                    defaultValue={this.state.defaultValue}
                    style={{ height: '100%' }}
                    modules={this.modules}
                // formats={this.formats}
                />
            </div>
        )
    }
}