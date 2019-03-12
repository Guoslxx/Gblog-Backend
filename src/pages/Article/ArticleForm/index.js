import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Row, Col, Input, Card, Button, Radio, message } from 'antd';
import Pagelayout from '@layouts/PageLayout';
import Editor from '../../../components/Editor';
import GUpload from '../../../components/GUpload';
import GTags from '../../../components/GTags';
import './style.less';
import { submitArticle, getArticleById } from '@api/article';
// console.log(submitAritcle)
const FormItem = Form.Item;
const { TextArea } = Input;
const { createFormField } = Form;

class AddArticle extends React.PureComponent {
    state = {
        formModel: {}
    }

    async componentDidMount() {
        const { match: { params } } = this.props;
        //编辑状态下，根据ID请求文章
        if (params.status === 'edit') {
            const result = await getArticleById({ id: params.id });
            console.log(result);
            if (result) {
                this.setState({
                    formModel: result[0]
                })
            } else {
                message.error('请求失败，请刷新后重试!');
            }
        }
    }
    render() {
        const { match: { params } } = this.props;
        const { formModel } = this.state;
        return (
            <Pagelayout>
                <AddForm model={formModel} params={params} />
            </Pagelayout>
        )
    }
}
@withRouter
@Form.create({
    mapPropsToFields(props) {
        //console.log('form map', props);
        const { model } = props;
        console.log('form',model)
        return {
            title: createFormField({ value: model.title || '' }),
            category: createFormField({ value: model.category || '' }),
            contents: createFormField({ value: model.contents || '' }),
            desc: createFormField({ value: model.desc || '' }),
            source: createFormField({ value: model.source || 'original' }),
            status: createFormField({ value: model.status || '' }),
            tags: createFormField({ value: model.tags || [] }),
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

    handleSubmitFields(fileds) {
        //const { isAdd } = this.state;
        // const { contents, ...restFileds } = fileds;
        // let _fileds = { ...fileds };
        return fileds;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const fields = this.handleSubmitFields(values);
                const result = await submitArticle(fields);
                console.log(result, this.props);
                if (result) {
                    message.success(`发布成功`);
                    setTimeout(() => {
                        this.props.history.push('/article/all');
                    }, 1000)

                }
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
                                        <Input style={{ width: '50%' }} autoComplete='off' />
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
                                    getFieldDecorator('tags')(
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