import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  imports: [MatListModule, MatIconModule],
  standalone: true,
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  menus = [
    {
      title: 'home',
      path: '/home'
    },
    {
      title: 'livros',
      path: '/books'
    },
    {
      title: 'usuarios',
      path: '/users'
    },
    {
      title: 'bibliotecas',
      path: '/libraries'
    },
  ]
}
