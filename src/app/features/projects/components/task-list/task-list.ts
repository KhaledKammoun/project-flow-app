import {Component, Input } from '@angular/core';
import {ITask} from '../../../../types/project-types';
import {LucideAngularModule} from 'lucide-angular';
import {LucideDynamicIcon} from '@lucide/angular';

@Component({
  selector: 'app-task-list',
  imports: [
    LucideAngularModule,
    LucideDynamicIcon
  ],
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
}

