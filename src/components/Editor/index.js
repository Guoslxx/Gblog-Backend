import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default class Editor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultValue: props.value
        }
    }

    handleChange(value) {
        const { onChange } = this.props;
        onChange && onChange(value);
    }

    render() {
        console.log('editor', this.props);
        return (
            <div style={this.props.style || null}>
                <ReactQuill onChange={e => { this.handleChange(e) }} defaultValue={this.state.defaultValue} style={{height:'100%'}}/>
            </div>
        )
    }
}