import { lazy } from 'react';
import App from '../App';

import MainPage from '../components/MainPage/MainPage';
import Catalog from '../components/Catalog/Catalog';
import Basket from '../components/Basket/Basket';

const routes = [
        {
            component: App,
            routes: [
                {
                    path: '/',
                    exact: true,
                    component: MainPage,
                },
                {
                    path: '/catalog',
                    exact: true,
                    component: Catalog,
                },
                {
                    path: '/basket',
                    exact: true,
                    component: Basket,
                }
            ]
        }
    ]

export default routes;