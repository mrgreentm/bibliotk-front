import { Route } from '@angular/router';
import { loadComponents } from './load-components';

export const appRoutes: Route[] = [
    {
        path: 'auth',
        loadComponent: loadComponents.loadAuthComponent,
    },
    {
        path: 'landing-page',
        loadComponent: loadComponents.loadLandingPageComponent
    },
    {
        path: '**',
        redirectTo: 'landing-page'
    }
];
