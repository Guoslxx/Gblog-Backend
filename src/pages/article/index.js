import React from 'react';
import { Row, Col, Table, Popconfirm, Tag } from 'antd';
import Pagelayout from '@layouts/PageLayout';

class Article extends React.PureComponent {

    handleRowEdit(id){
        this.props.history.push(`/admin/article/edit/${id}`);
    }

    column = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: '标题', dataIndex: 'title', key: 'title' },
        { title: '日期', dataIndex: 'publisDate', key: 'publisDate' },
        { title: '作者', dataIndex: 'author', key: 'author' },
        { title: '状态', dataIndex: 'status', key: 'status',
            render:(_,record) => {
                return record.status ? (<Tag color='green'>发布</Tag>) : (<Tag>草稿</Tag>);
            } 
        },
        {
            title: '操作',
            key: 'action',
            width: '120px',
            render: (_, record) => (
                <div>
                    <a href="javascript:;" style={{marginRight:'8px'}} onClick={e => {this.handleRowEdit(record.id)}}>编辑</a>
                    <Popconfirm 
                        title="你确定要删除此文章吗?"
                        okText="确定"
                        cancelText="否"
                        onConfirm={(e)=>{console.log(e)}}
                        >
                        <a href="javascript:;">删除</a>
                    </Popconfirm>
                </div>
            )
        }
    ]

    tableData = [
        { id: '1', title: 'aaa',publisDate:'2018年9月14日',author:'admin',status:true },
        { id: '2', title: 'bbb',publisDate:'2018年9月14日',author:'admin',status:false },
        { id: '3', title: 'ccc',publisDate:'2018年9月14日',author:'admin',status:false },
        { id: '4', title: 'ddd',publisDate:'2018年9月14日',author:'admin',status:true },
    ]

    render() {
        return (
            <Pagelayout>
                <Row>
                    <Col>
                        <Table
                            columns={this.column}
                            dataSource={this.tableData}
                            rowKey='id'
                        />
                    </Col>
                </Row>
            </Pagelayout>
        )
    }
}


export default Article;