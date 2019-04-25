import React from 'react';
import {renderRoutes} from 'react-router-config';


const routes = [
        {
            component: App,
            routes: [
                {
                    path: '/MainPage',
                    component: MainPage
                },
                {
                    path: '/Catalog',
                    component: Catalog
                },
                {
                    path: '/Basket',
                    component: Basket
                }
            ]
        }
    ]

const App = ({ route }) => (
    <div>
        <App/>
        {renderRoutes(route.routes)}
    </div>
);

const MainPage = ({ route }) => (<MainPage/>);

const Catalog = ({ route }) => (<Catalog/>);

const Basket = ({ route }) => (<Basket/>);


export default routes;