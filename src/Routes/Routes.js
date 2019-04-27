import { lazy } from 'react';
import App from '../App';


const routes = [
        {
            component: App,
            routes: [
                {
                    path: '/',
                    exact: true,
                    component: lazy(()=> import('../components/MainPage/MainPage')),
                },
                {
                    path: '/catalog',
                    exact: true,
                    component: lazy(()=> import('../components/Catalog/Catalog')),
                },
                {
                    path: '/basket',
                    exact: true,
                    component: lazy(()=> import('../components/Basket/Basket')),
                }
            ]
        }
    ]

export default routes;