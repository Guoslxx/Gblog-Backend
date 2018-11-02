import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';
const { CheckableTag } = Tag;
/**
     * dataSource结构
     * {
     *  id:number,
     *  label:string,
     *  desc:string
     * }
     * 
     * checkList结构
     * {
     * id:number,
     * label:string
     * }
     */
export default class GTags extends React.PureComponent {

    static propTypes = {
        value: PropTypes.array
    }

    constructor(props) {
        super(props);
        console.log('gtags', props)
        this.state = {
            dataSource: [],
            checkList: props.value instanceof Array ? props.value : [],
        }
    }

    getDateSource() {
        return new Promise((resolve, reject) => {
            resolve([{ id: 1, label: '标签一', value: '标签一' }, { id: 2, label: '标签二', value: '标签二' }, { id: 3, label: '标签三', value: '标签三' }]);
        })
    }

    async componentDidMount() {
        var _dataSource = await this.getDateSource();
        this.setState({
            dataSource: _dataSource
        })
    }

    handleTagSelect(curVal, isChecked) {
        const { checkList } = this.state;
        const { onChange } = this.props;
        let _checkList = [...checkList];
        if (isChecked) {
            _checkList = checkList.filter(e => e.id !== curVal.id);
        } else {
            _checkList.push(curVal);
        }
        this.setState({
            checkList: _checkList
        })
        onChange && onChange(_checkList);
    }

    render() {
        const { dataSource, checkList } = this.state;
        return (
            <div>
                {
                    dataSource.map(item => {
                        //以是否能在checkList中找到，来判断当前Tag是否checked.
                        const _isChecked = checkList.find(e => e.id === item.id);
                        return (
                            <CheckableTag
                                onChange={e => { this.handleTagSelect({ id: item.id, label: item.label }, _isChecked) }}
                                title={'描述'}
                                checked={_isChecked}
                                key={item.id}>
                                {item.label}
                            </CheckableTag>)
                    })
                }
            </div>
        )
    }
}