import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './Routes';
import { Layout } from '../layout/Layout';
import { Suspense } from 'react';


export const PrincipalRouter = () => {
    return (
        <Suspense fallback={ <h1>Loading...</h1> }>
            <Layout>
                <Routes>
                    {
                        routes.map( (route, index) => (
                            <Route key={ index } path={ route.path } element={ <route.Component /> } />
                        ))
                    }
                    <Route path="/*" element={ <Navigate to={ routes[0].path } replace /> } />
                </Routes> 
            </Layout>
        </Suspense>
       
    )
}