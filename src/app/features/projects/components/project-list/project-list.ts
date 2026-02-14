import { Component } from '@angular/core';
import {TaskList} from '../task-list/task-list';
import {IProject} from '../../../../types/project-types';
import {Button} from '../button/button';

@Component({
  selector: 'app-project-list',
  imports: [
    TaskList,
    Button,
  ],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {
  projects: IProject[] = [
    {
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


  getStatusColor(status: string): string {
    switch (status) {
      case 'En attente': return 'bg-yellow-100 text-yellow-700';
      case 'En cours': return 'bg-blue-100 text-blue-700';
      case 'Terminé': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  }

  getBulletColor(status: string): string {
    switch (status) {
      case 'En attente': return 'bg-yellow-300 text-yellow-900';
      case 'En cours': return 'bg-blue-300 text-blue-900';
      case 'Terminé': return 'bg-green-300 text-green-900';
      default: return 'bg-gray-300 text-gray-700';
    }
  }


}
