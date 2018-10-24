import React from 'react';
import { Form, Row, Col } from 'antd';
import Pagelayout from '@layouts/PageLayout';

const {FormItem} = Form;
@Form.create()
class AddArticle extends React.PureComponent {
    formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      }
    render() {
        console.log(this.props,'add-article');
        const {
            form:{getFieldDecorator}
        } = this.props;
        return (
            <Pagelayout>
                <Form>
                <FormItem {...this.formItemLayout} label='文章标题'>
                    {
                        getFieldDecorator('title',)
                }
                </FormItem>
                </Form>
            </Pagelayout>
        )
    }
}

console.log(AddArticle)
export default AddArticle;