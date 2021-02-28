module.exports = {
    dest: '../../vuepress',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'QSynthesis',
            description: '跨平台声音合成前端',
        },
        '/en/': {
            lang: 'en-US',
            title: 'QSynthesis',
            description: 'Cross-platform vocal synthesis frontend'
        }
    },
    head:[
        ['link', { rel: 'icon', href: `/logo.png` }],
    ],
    themeConfig: {
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                lastUpdated: '上次更新',
                nav: require('./nav/zh'),
                sidebar: {
                    '/src/About/': getApiSidebar('关于 QSynthesis'),
                }
            },
            '/en/': {
                label: 'English',
                selectText: '',
                ariaLabel: 'Select language',
                lastUpdated: 'Last Updated',
                nav: require('./nav/en'),
                sidebar: {
                    '/api/': getApiSidebar(),
                }
            }
        },
    },

}

function getApiSidebar(groupA) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'Update-Log'
            ]
        },
    ]

}
