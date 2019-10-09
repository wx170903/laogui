import Vue from 'vue'
import Router from 'vue-router'
import Decision from '@/pages/Decision'
import Analyse from '@/pages/Analyse'
import Record from '@/pages/Record'

Vue.use(Router)

export default new Router({
    routes: [{ //决策支撑
            path: '/',
            name: 'Decision',
            component: Decision
        },
        { //综合分析
            path: '/Analyse',
            name: 'Analyse',
            component: Analyse,
            children: [{
                path: '/fwAnalysis',
                name: 'Analysis',
            }]
        },
        { //一废一档
            path: '/Record',
            name: 'Record',
            component: Record
        }
    ]
})