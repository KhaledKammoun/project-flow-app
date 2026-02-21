import {Component, Input, Output , EventEmitter } from '@angular/core';
import {IProject, Status, StatusValues} from '../../../../types/project-types';
import {Button} from '../button/button';
import {getBulletColor, getStatusColor} from '../../../../utils/util';

@Component({
  selector: 'app-project-details',
  imports: [
    Button
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

  protected readonly getBulletColor = getBulletColor;
  protected readonly getStatusColor = getStatusColor;
}
