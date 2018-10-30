import React from 'react';
import { Form, Row, Col, Input, Card, Button } from 'antd';
import Pagelayout from '@layouts/PageLayout';
import Editor from '../../../components/Editor';
const FormItem = Form.Item;
const { TextArea } = Input;
const { createFormField } = Form;

class AddArticle extends React.PureComponent {
    render() {
        console.log(this.props,'form article')
        return (
            <Pagelayout>
                <AddForm model={{ test: '测试数据', title: '测试标题' }} />
            </Pagelayout>
        )
    }
}

@Form.create({
    mapPropsToFields(props) {
        //console.log('form map', props);
        const { model } = props;
        return {
            test: createFormField({ value: model.test || '' }),
            title: createFormField({ value: model.title || '' }),
        }
    }
})
class AddForm extends React.Component {
    formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 3 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 20 },
        },
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit', this.props.form.getFieldsValue());
    }
    render() {
        const {
            form: { getFieldDecorator }
        } = this.props;
        return (
            <Form onSubmit={e => { this.handleSubmit(e) }}>
                <Row type='flex' justify='space-around'>
                    <Col span={16}>
                        <Card title="撰写文章">
                            <FormItem {...this.formItemLayout} label='文章标题'>
                                {
                                    getFieldDecorator('title')(
                                        <Input style={{ width: '50%' }} />
                                    )
                                }
                            </FormItem>
                            <FormItem {...this.formItemLayout} label='文章描述'>
                                {
                                    getFieldDecorator('desc')(
                                        <TextArea autosize={{ minRows: 2 }} />
                                    )
                                }
                            </FormItem>
                            <FormItem {...this.formItemLayout} label='文章标签'>
                                {
                                    getFieldDecorator('tag')(
                                        <Input />
                                    )
                                }
                            </FormItem>
                            <FormItem {...this.formItemLayout} label='文章内容'>
                                {
                                    getFieldDecorator('contents')(
                                        <Editor style={{height:'600px'}}/>
                                    )
                                }
                            </FormItem>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='发布选项'>
                            <FormItem {...this.formItemLayout} label='来源'>
                                {
                                    getFieldDecorator('source')(
                                        <Input />
                                    )
                                }
                            </FormItem>
                            <FormItem {...this.formItemLayout} label='分类'>
                                {
                                    getFieldDecorator('category')(
                                        <Input />
                                    )
                                }
                            </FormItem>
                            <FormItem {...this.formItemLayout} label='状态'>
                                {
                                    getFieldDecorator('status')(
                                        <Input />
                                    )
                                }
                            </FormItem>
                            <FormItem {...this.formItemLayout} label='状态'>
                                <Button htmlType='submit'>发布</Button>
                            </FormItem>
                        </Card>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default AddArticle;