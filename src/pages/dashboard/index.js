import React from 'react';
import PageLayout from '@layouts/PageLayout';

class Dashboard extends React.PureComponent{
    render(){
        return (
            <PageLayout>
                <h1>控制面板213dsfsd</h1>
                <button onClick={e=>{this.props.history.push('/test')}}>test</button>
            </PageLayout>
        )
    }
}

export default Dashboard;