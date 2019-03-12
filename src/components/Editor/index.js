import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
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

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value){
            //console.log('receive',this.props.value,'--------',nextProps.value,this.quill);
            this.quill.current.setEditorContents(this.quill.current.editor, nextProps.value);
        }
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
        const outputValue = {
            html: value,
            markdowns: value,
            text: value,
        }
        console.log('change',value)
        onChange && onChange(outputValue);
    }

    render() {
        console.log('editor props',this.props.value)
        return (
            <div style={this.props.style || null} className={'g-editor'}>
                <ReactQuill
                    ref={this.quill}
                    onChange={e => { this.handleChange(e) }}
                    style={{ height: '100%' }}
                    modules={this.modules}
                    value={this.props.value}
                // formats={this.formats}
                />
            </div>
        )
    }
}