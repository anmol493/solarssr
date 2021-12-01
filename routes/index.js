import PageHeader from '../client/component/header'
import Home from '../client/component/Home';
import Calculator from '../client/component/calculator';
import Hello from '../client/component/hello'
const routes=[
    {
        component:PageHeader,
        routes:[
            {
                path:'/',
                exact:true,
                component:Home
            },
            {
                path:'/calculator',
                component:Calculator
            },
            {
                path:'/hello',
                component:Hello
            }
        ]
    }
]

export default routes;