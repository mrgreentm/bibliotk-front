/* eslint-disable @nx/enforce-module-boundaries */
import { Component, inject, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { AuthService } from '@bibliotk/features/auth';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  imports: [MatListModule, MatIconModule, RouterLink, NgClass],
  providers: [AuthService],
  standalone: true,
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  router: Router = inject(Router);
  authService: AuthService = inject(AuthService);
  menus = [
    {
      title: 'home',
      path: '/home',
      selected: true
    },
    {
      title: 'livros',
      path: '/books',
      selected: false
    },
    {
      title: 'usuarios',
      path: '/users',
      selected: false
    },
    {
      title: 'bibliotecas',
      path: '/libraries',
      selected: false
    },
  ];
  ngOnInit(): void {
    this.selectRoute();
  }
  selectRoute(): void {
    this.menus.forEach((menu) => {
      if (this.router.url.includes(menu.path))
        menu.selected = true;
      else menu.selected = false;
    })
  }
  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
