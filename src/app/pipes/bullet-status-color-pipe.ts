import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bulletStatusColor',
})
export class BulletStatusColorPipe implements PipeTransform {

  transform(status: string): string {
    switch (status) {
      case 'En attente': return 'bg-yellow-300 text-yellow-900';
      case 'En cours': return 'bg-blue-300 text-blue-900';
      case 'Terminé': return 'bg-green-300 text-green-900';
      default: return 'bg-gray-300 text-gray-700';
    }
  }

}
