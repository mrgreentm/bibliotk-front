export const loadComponents = {
    loadAuthComponent: () => import('@bibliotk/features/auth').then(c => c.AuthComponent),
    loadLandingPageComponent: () => import('@bibliotk/features/landing-page').then(c => c.LandingPageComponent),
    loadHomeComponent: () => import('@bibliotk/features/home').then(c => c.HomeComponent)
}