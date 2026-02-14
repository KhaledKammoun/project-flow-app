import {Component, Input} from '@angular/core';
import {ITask} from '../../../../types/project-types';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Input() tasks: ITask[] = [];

  getStatusColor(status: string): string {
    switch (status) {
      case 'En attente': return 'border-yellow-500';
      case 'En cours': return 'border-blue-500';
      case 'Terminé': return 'border-green-500';
      default: return 'border-gray-500';
    }
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'High': return 'bg-red-500';
      case 'Medium': return 'bg-yellow-400';
      case 'Low': return 'bg-green-400';
      default: return 'bg-gray-400';
    }
  }
}

