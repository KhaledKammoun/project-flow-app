export type Status = 'En cours' | 'En attente' | 'Terminé';

interface ITask {
  title: string;
  priority: string;
  status: Status;
}

interface IProject {
  name: string;
  description: string;
  status: Status;
  tasks: ITask[];
}

export type { IProject, ITask };
