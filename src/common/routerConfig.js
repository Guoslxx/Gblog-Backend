const routerConfig = [
    { title: '控制台', path: `/dashboard`, icon: 'dashboard',component:'Dashboard' },
    {
        title: '文章管理', path: `/article`, icon: 'bar-chart',
        children: [
            {
                title: '所有文章',
                path: '/article/all',
                icon:'align-left',
                component:'Article',
            },
            {
                title: '发布文章',
                path: '/article/add-article',
                icon:'form',
                component:'AddArticle'
            }
        ]
    },
]

export default routerConfig;