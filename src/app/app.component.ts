import { Component, OnDestroy, inject } from '@angular/core';
import { ResolveEnd, Router, RouterModule } from '@angular/router';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterModule, NavBarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  private router: Router = inject(Router);
  private destroy$ = new Subject();
  showNavBar = false;
  title = 'bibliotk';

  constructor() {
    this.router.events
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.verifyCurrentRoute((res as ResolveEnd).url)
      })
  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  verifyCurrentRoute(url: string): void {
    if (url?.includes("home"))
      this.showNavBar = true;
    else this.showNavBar = false;
  }
}
