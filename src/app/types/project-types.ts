export const StatusValues = [
  'En cours',
  'En attente',
  'Terminé'
] as const;

export type Status = typeof StatusValues[number];

interface ITask {
  title: string;
  priority: string;
  status: Status;
}

interface IProject {
  id: number;
  name: string;
  description: string;
  status: Status;
  tasks: ITask[];
}

export type { IProject, ITask };
