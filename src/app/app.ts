import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectList } from './features/projects/components/project-list/project-list';
import { Header } from './features/projects/components/header/header';
import { Footer } from './features/projects/components/footer/footer';
import { AddProject } from './features/projects/components/add-project/add-project';
import { IProject } from './types/project-types';
import {EditProject} from './features/projects/components/edit-project/edit-project';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectList, Header, Footer, AddProject, EditProject],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('project-manager');
  latestAddedProject: IProject | null = null;
  selectedProject: IProject | null = null;

  isAddProjectOpen: boolean = false;
  isEditProjectOpen: boolean = false;
  setIsAddProjectOpen = (isOpen: boolean) => {
    this.isAddProjectOpen = isOpen;
  };

  setIsEditProjectOpen = (isOpen: boolean) => {
    this.isEditProjectOpen = isOpen;
  }

  onProjectCreated(project: IProject) {
    this.latestAddedProject = project;
    this.setIsAddProjectOpen(false);
  }

  onProjectUpdated(project: IProject) {
    this.selectedProject = project;
    this.setIsEditProjectOpen(false);
  }
}
