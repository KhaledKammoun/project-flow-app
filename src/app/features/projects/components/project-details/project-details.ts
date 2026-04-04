import {Component, Input, Output , EventEmitter } from '@angular/core';
import {IProject, Status, StatusValues} from '../../../../types/project-types';
import {Button} from '../button/button';
import {DecimalPipe, NgClass} from '@angular/common';
import {StatusColorPipe} from '../../../../pipes/status-color-pipe';
import {BulletStatusColorPipe} from '../../../../pipes/bullet-status-color-pipe';
import {TaskList} from '../task-list/task-list';

@Component({
  selector: 'app-project-details',
  imports: [
    Button,
    DecimalPipe,
    StatusColorPipe,
    NgClass,
    BulletStatusColorPipe,
    TaskList
  ],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails {

  @Input() project: IProject | null = null;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  getProgress() {
    return (this.project?.tasks.filter(t => t.status === 'Terminé').length || 0) / (this.project?.tasks.length || 1) * 100;
  }
}
