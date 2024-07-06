import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-landing-page',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatButtonModule, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  routes = [
    {
      path: '/contact',
      title: 'fale conosco'
    },
    {
      path: '/auth',
      title: 'entrar'
    },
    {
      path: '/register',
      title: 'cadastre-se'
    }
  ]
}
