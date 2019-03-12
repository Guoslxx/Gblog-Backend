const routes = [
    { title: 'Welcome', path: `/welcome`, icon: 'home',component:'Welcome' },
    {
        title: '博客管理', path: `/article`, icon: 'bar-chart',
        children: [
            {
                title: '所有文章',
                path: '/article/all',
                icon:'align-left',
                component:'Article',
            },
            {
                title: '发布文章',
                path: '/article/:status',
                icon:'form',
                component:'ArticleForm',
                params:{status:'add'}
            },
            {
                title: '编辑文章',
                path: '/article/:status/:id',
                icon:'form',
                component:'ArticleForm',
                isHide:true,
            },
        ]
    },
]

export default routes;