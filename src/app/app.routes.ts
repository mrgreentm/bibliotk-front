/* eslint-disable @nx/enforce-module-boundaries */
import { Route } from '@angular/router';
import { loadComponents } from './load-components';
import { authGuard } from '@bibliotk/features/auth';
import { AuthService } from 'features/auth/src/lib/auth/data-access/auth.service';

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
        canActivate: [authGuard],
    },
    {
        path: 'books',
        loadComponent: loadComponents.loadBooksComponent
    },
    {
        path: '**',
        redirectTo: 'landing-page'
    }
];
