/* eslint-disable @nx/enforce-module-boundaries */
import { Route } from '@angular/router';
import { loadComponents } from './load-components';
import { authGuard } from '@bibliotk/features/auth';
import { AuthService } from '@bibliotk/features/auth';

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
        path: 'home',
        loadComponent: loadComponents.loadHomeComponent,
        providers: [AuthService],
        canActivate: [authGuard]
    },
    {
        path: 'books',
        loadComponent: loadComponents.loadBooksComponent,
        canActivate: [authGuard]
    },
    {
        path: '**',
        redirectTo: 'landing-page'
    }
];
