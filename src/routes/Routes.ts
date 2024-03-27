import { LazyExoticComponent, lazy } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
    "to": string;
    "path": string;
    "Component": LazyExoticComponent<JSXComponent> | JSXComponent;
    "name": string;
}


const lazyPrincipalRoute = lazy(() => import(/* webpackChunkName: "PrincipalScreeen" */ '../screens/DataScreen'));
const lazySecondaryRoute = lazy(() => import(/* webpackChunkName: "PrincipalScreeen" */ '../screens/PlanScreen'));


export const routes: Route[] = [
    {
        "to": '/datos',
        "path": '/datos',
        "Component": lazyPrincipalRoute,
        "name": 'Datos - Dashboard'
    },
    {
        "to": '/plan',
        "path": 'plan',
        "Component": lazySecondaryRoute,
        "name": 'Plan - Dashboard'
    }
];