import React from 'react';

import DefaultLayout from './hoc/Layout/DefaultLayout';

const Dashboard = React.lazy(() => { return import('./Views/Dashboard')});

let routes = [
    {
        path: '/dashboard',
        exact: true,
        layout: DefaultLayout,
        name: 'Dashboard',
        component: Dashboard,
        isPrivate: true
    },
]

export default routes;