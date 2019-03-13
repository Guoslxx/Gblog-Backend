import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './style.less';
export default class Editor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editorValue: props.value
        }
        this.quill = React.createRef();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let state = null
        if ('value' in nextProps && nextProps.value !== prevState.editorValue) {
            console.log('getder',nextProps.value)
            state = {
                editorValue: nextProps.value
            }
        }
        return state;
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

    handleChange(value) {
        const { onChange } = this.props;
        onChange && onChange(value);
    }

    render() {
        const { editorValue } = this.state;
        console.log('editor props', editorValue)
        return (
            <div style={this.props.style || null} className={'g-editor'}>
                <ReactQuill
                    ref={this.quill}
                    onChange={e => { this.handleChange(e) }}
                    style={{ height: '100%' }}
                    modules={this.modules}
                    value={editorValue}
                // formats={this.formats}
                />
            </div>
        )
    }
}