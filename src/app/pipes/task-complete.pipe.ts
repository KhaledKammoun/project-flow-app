import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../types/project-types';

@Pipe({
  name: 'taskCompletePipe',
  standalone: true,
})
export class TaskCompletePipe implements PipeTransform {
  transform(tasks: ITask[]): number {
    if (!tasks || tasks.length === 0) return 0;
    return tasks.filter(task => task.status === 'Terminé').length;
  }
}

