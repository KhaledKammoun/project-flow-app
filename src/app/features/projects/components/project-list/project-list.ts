import {Component, Input} from '@angular/core';
import {TaskList} from '../task-list/task-list';
import {IProject, Status, StatusValues} from '../../../../types/project-types';
import {Button} from '../button/button';
import {ProjectDetails} from '../project-details/project-details';
import {getBulletColor, getStatusColor} from '../../../../utils/util';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-project-list',
  imports: [
    TaskList,
    Button,
    ProjectDetails,
    FormsModule
  ],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {
  projects: IProject[] = [
    {
      id: 0,
      name: 'Website Redesign',
      description: 'Refonte complète du site web pour améliorer l’UX et la vitesse de chargement.',
      status: 'En cours',
      tasks: [
        { title: 'Audit UX existant', priority: 'Haute', status: 'Terminé' },
        { title: 'Création maquettes', priority: 'Haute', status: 'En cours' },
        { title: 'Validation client', priority: 'Moyenne', status: 'En attente' },
        { title: 'Déploiement final', priority: 'Haute', status: 'En attente' }
      ]
    },
    {
      id: 1,
      name: 'Campagne Marketing Q1',
      description: 'Planification et exécution de la campagne marketing pour le premier trimestre.',
      status: 'En attente',
      tasks: [
        { title: 'Définir objectifs', priority: 'Haute', status: 'Terminé' },
        { title: 'Créer visuels réseaux sociaux', priority: 'Moyenne', status: 'En cours' },
        { title: 'Rédaction contenu email', priority: 'Moyenne', status: 'En attente' },
        { title: 'Lancement campagne', priority: 'Haute', status: 'En attente' }
      ]
    },
    {
      id: 2,
      name: 'Application Mobile',
      description: 'Développement de l’application mobile pour iOS et Android.',
      status: 'En cours',
      tasks: [
        { title: 'Setup projet', priority: 'Haute', status: 'Terminé' },
        { title: 'Création API', priority: 'Haute', status: 'En cours' },
        { title: 'Design UI', priority: 'Moyenne', status: 'En cours' },
        { title: 'Tests unitaires', priority: 'Moyenne', status: 'En attente' },
        { title: 'Publication sur App Store', priority: 'Haute', status: 'En attente' }
      ]
    },
    {
      id: 3,
      name: 'Migration Base de Données',
      description: 'Migration des données legacy vers la nouvelle architecture sécurisée.',
      status: 'Terminé',
      tasks: [
        { title: 'Backup données', priority: 'Haute', status: 'Terminé' },
        { title: 'Écriture script migration', priority: 'Haute', status: 'Terminé' },
        { title: 'Test migration', priority: 'Moyenne', status: 'Terminé' },
        { title: 'Déploiement production', priority: 'Haute', status: 'Terminé' }
      ]
    },
    {
      id: 4,
      name: 'Onboarding Nouveaux Employés',
      description: 'Création du processus d’intégration pour les nouveaux employés.',
      status: 'En attente',
      tasks: [
        { title: 'Rédaction manuel interne', priority: 'Moyenne', status: 'En attente' },
        { title: 'Création vidéo tutoriel', priority: 'Moyenne', status: 'En attente' },
        { title: 'Organisation sessions onboarding', priority: 'Moyenne', status: 'En attente' }
      ]
    }
  ];

  project: IProject | null = null;

  openProjectDetails = (projectId: number) => {
    this.project = this.projects.find((p) => p.id === projectId) || null;
  }


  searched_project: string = "";
  selected_status: Status | 'All' = 'All';
  resetStatus= () => {
    this.selected_status = "All";
  }


  get filtered_projects(): IProject[] {
    return this.projects.filter(p =>
      (this.selected_status === 'All' || !this.selected_status || p.status === this.selected_status) &&
      p.name.toLowerCase().includes(this.searched_project.toLowerCase())
    );
  }

  protected readonly StatusValues = StatusValues;
  protected readonly getBulletColor = getBulletColor;
  protected readonly getStatusColor = getStatusColor;
}
