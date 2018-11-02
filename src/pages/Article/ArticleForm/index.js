import React from 'react';
// import { Prompt } from 'react-router-dom';
import { Form, Row, Col, Input, Card, Button, Radio, Checkbox } from 'antd';
import Pagelayout from '@layouts/PageLayout';
import Editor from '../../../components/Editor';
import GUpload from '../../../components/GUpload';
import GTags from '../../../components/GTags';
import './style.less';
const FormItem = Form.Item;
const { TextArea } = Input;
const { createFormField } = Form;
const CheckboxGroup = Checkbox.Group;

class AddArticle extends React.PureComponent {
    render() {
        const { match: { params } } = this.props;
        return (
            <Pagelayout>
                <AddForm model={{}} params={params} />
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
            category: createFormField({ value: model.category || '' }),
            contents: createFormField({ value: model.contents || '' }),
            desc: createFormField({ value: model.desc || '' }),
            source: createFormField({ value: model.source || 'original' }),
            status: createFormField({ value: model.status || '' }),
            tag: createFormField({ value: model.tag || [] }),
            cover: createFormField({ value: model.cover || '' }),
        }
    }
})
class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdd: props.params.status === 'add'
        }
    }

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
        this.props.form.validateFields((values, err) => {
            console.log('validate', values, err);
            if (!err) {
                this.props.dispatch()
            }
        })
    }

    routerWillLeave(nextLocation) {
        console.log(nextLocation, 'router leave')
    }

    render() {
        const {
            form: { getFieldDecorator }
        } = this.props;
        const { isAdd } = this.state;
        const cardTitle = isAdd ? '撰写文章' : '编辑文章';
        return (
            <Form onSubmit={e => { this.handleSubmit(e) }}>
                {/* <Prompt when={true} message='退出?'></Prompt> */}
                <Row type='flex' justify='space-around'>
                    <Col span={16}>
                        <Card title={cardTitle}>
                            <FormItem {...this.formItemLayout} label='文章标题'>
                                {
                                    getFieldDecorator('title', {
                                        rules: [{ required: true, message: '请输入文章标题' }]
                                    })(
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
                                        <GTags />
                                    )
                                }
                            </FormItem>
                            <FormItem {...this.formItemLayout} label='文章内容'>
                                {
                                    getFieldDecorator('contents', {
                                        rules: [{ required: true, message: '请输入文章内容' }]
                                    })(
                                        <Editor style={{ height: '500px' }} />
                                    )
                                }
                            </FormItem>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='封面图片' style={{ marginBottom: '24px' }}>
                            <FormItem >
                                {
                                    getFieldDecorator('cover')(
                                        <GUpload />
                                    )
                                }
                            </FormItem>
                        </Card>
                        {/* <Card title='标签' style={{ marginBottom: '24px' }}>
                            <FormItem {...this.formItemLayout}>
                                {
                                    getFieldDecorator('tag')(
                                        <CheckboxGroup options={[{ label: 'Apple', value: 'Apple' },]} />
                                    )
                                }
                            </FormItem>
                        </Card> */}
                        <Card title='发布选项'>
                            <FormItem {...this.formItemLayout} label='来源'>
                                {
                                    getFieldDecorator('source')(
                                        <Radio.Group buttonStyle="solid">
                                            <Radio.Button value="original">原创</Radio.Button>
                                            <Radio.Button value="reprint">转载</Radio.Button>
                                        </Radio.Group>
                                    )
                                }
                            </FormItem>
                            {/* <FormItem {...this.formItemLayout} label='分类'>
                                {
                                    getFieldDecorator('category')(
                                        <Input />
                                    )
                                }
                            </FormItem> */}
                            <FormItem {...this.formItemLayout} label='状态'>
                                {
                                    getFieldDecorator('status')(
                                        <Radio.Group buttonStyle="solid">
                                            <Radio.Button value="release">发布</Radio.Button>
                                            <Radio.Button value="draft">草稿</Radio.Button>
                                        </Radio.Group>
                                    )
                                }
                            </FormItem>
                            <FormItem>
                                <Button htmlType='submit' type='primary' size='large' style={{ width: '100%', fontWeight: 'bold' }}
                                    icon={isAdd ? 'file-text' : 'edit'}
                                    loading={false}
                                >
                                    {isAdd ? '发布文章' : '修改文章'}
                                </Button>
                            </FormItem>
                        </Card>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default AddArticle;