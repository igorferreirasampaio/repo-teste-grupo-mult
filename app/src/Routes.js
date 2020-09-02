import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/HomePage'));
const TemperaturaAtualPage = lazy(() => import('./pages/TemperaturaAtualPage'));
const HistoricoTemperaturasPage = lazy(() => import('./pages/HistoricoTemperaturasPage'));
const AlarmesPage = lazy(() => import('./pages/AlarmesPage'));

const Routes = () => {
    return (
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                <Route exact path='/' component={Home} />
                <Route exact path='/temperatura-atual' component={TemperaturaAtualPage} />
                <Route exact path='/historico-temperaturas' component={HistoricoTemperaturasPage} />
                <Route exact path='/alarmes' component={AlarmesPage} />
            </Suspense>
        </Switch>
    )
}

export default Routes;