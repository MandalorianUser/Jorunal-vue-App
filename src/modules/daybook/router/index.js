export default{
    path:'/daybook',
    name:'daybook-layout',
    component: () => import (/* webpackChunkName: "daybookLayout" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children:[
            {path:'',
            name:'no-entry',
            component: () => import (/* webpackChunkName: "daybook-no-entry-selected" */ '@/modules/daybook/views/NoEntry-Selected-View.vue'),
        },
        {
            path:':id',
            name:'entry',
            component: () => import (/* webpackChunkName: "daybook-entry-selected" */ '@/modules/daybook/views/Entry-View.vue'),

        
        }
    ]
 
}