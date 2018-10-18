import React from 'react';
import { Card } from 'antd';

class Pagelayout extends React.PureComponent {

    cardTitle () {
        const { title } = this.props;
        return title || null;
    }

    render() {
        return (
            <Card 
                bordered={false}
                title={this.cardTitle()}
            >
                {this.props.children}
            </Card>
        )
    }
}

export default Pagelayout;