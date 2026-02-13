import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Input() tasks: any[] = [];

  getStatusColor(status: string): string {
    switch (status) {
      case 'En attente': return 'border-yellow-500';
      case 'En cours': return 'border-blue-500';
      case 'Terminé': return 'border-green-500';
      default: return 'border-gray-500';
    }
  }
}

