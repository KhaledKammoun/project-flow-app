export function getStatusColor(status: string) : string {
  switch (status) {
    case 'En attente': return 'bg-yellow-100 text-yellow-700';
    case 'En cours': return 'bg-blue-100 text-blue-700';
    case 'Terminé': return 'bg-green-100 text-green-700';
    default: return 'bg-gray-100 text-gray-700';
  }
}

export function getBulletColor(status: string): string {
  switch (status) {
    case 'En attente': return 'bg-yellow-300 text-yellow-900';
    case 'En cours': return 'bg-blue-300 text-blue-900';
    case 'Terminé': return 'bg-green-300 text-green-900';
    default: return 'bg-gray-300 text-gray-700';
  }
}

export function getStatusColor_less_degree(status: string): string {
  switch (status) {
    case 'En attente': return 'border-yellow-500';
    case 'En cours': return 'border-blue-500';
    case 'Terminé': return 'border-green-500';
    default: return 'border-gray-500';
  }
}
