import {Component, Input} from '@angular/core';
import {ITask} from '../../../../types/project-types';
import {getStatusColor, getStatusColor_less_degree} from '../../../../utils/util';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Input() tasks: ITask[] = [];

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'High': return 'bg-red-500';
      case 'Medium': return 'bg-yellow-400';
      case 'Low': return 'bg-green-400';
      default: return 'bg-gray-400';
    }
  }

  protected readonly getStatusColor = getStatusColor;
  protected readonly getStatusColor_less_degree = getStatusColor_less_degree;
}

