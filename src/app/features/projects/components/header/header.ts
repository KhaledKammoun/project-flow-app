import { Component } from '@angular/core';
import {Logo} from '../logo/logo';
import {Button} from '../button/button';

@Component({
  selector: 'app-header',
  imports: [
    Logo,
    Button
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isAuthenticated: boolean = false;

  toggleAuth() {
    this.isAuthenticated = !this.isAuthenticated;
  }

}
