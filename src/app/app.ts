import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProjectList} from './features/projects/components/project-list/project-list';
import {Header} from './features/projects/components/header/header';
import {Footer} from './features/projects/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectList, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project-manager');
}
