import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../data-access/auth.service";

export const authGuard: CanActivateFn = ()=> {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    if(authService.getTokenFromStorage())
        return true;
    router.navigateByUrl('/auth')
    return false;
}