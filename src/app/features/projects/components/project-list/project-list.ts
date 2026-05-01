import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IProject, Status, StatusValues } from '../../../../types/project-types';
import { Button } from '../button/button';
import { ProjectDetails } from '../project-details/project-details';
import { FormsModule } from '@angular/forms';
import { StatusColorPipe } from '../../../../pipes/status-color-pipe';
import { NgClass } from '@angular/common';
import { BulletStatusColorPipe } from '../../../../pipes/bullet-status-color-pipe';
import { TaskCompletePipe } from '../../../../pipes/task-complete.pipe';

@Component({
  selector: 'app-project-list',
  imports: [Button, ProjectDetails, FormsModule, StatusColorPipe, NgClass, BulletStatusColorPipe, TaskCompletePipe],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList implements OnChanges {
  @Input() addedProject: IProject | null = null;
  @Input() setIsEditProjectOpen!: (isOpen: boolean) => void;
  @Output() projectSelected = new EventEmitter<IProject>();

  projects: IProject[] = [
    {
      id: 0,
      name: 'Website Redesign',
      description: 'Refonte complète du site web pour améliorer l\'UX et la vitesse de chargement. Inclus la migration vers les dernières technologies web, l\'optimisation des performances, et l\'amélioration de la responsivité mobile. Audit UX approfondi, redesign des interfaces utilisateur et tests d\'acceptation client.',
      status: 'En cours',
      tasks: [
        { title: 'Audit UX existant', priority: 'Haute', status: 'Terminé' },
        { title: 'Création maquettes', priority: 'Haute', status: 'En cours' },
        { title: 'Validation client', priority: 'Moyenne', status: 'En attente' },
        { title: 'Déploiement final', priority: 'Haute', status: 'En attente' },
      ],
    },
    {
      id: 1,
      name: 'Campagne Marketing Q1',
      description: 'Planification et exécution stratégique de la campagne marketing pour le premier trimestre. Coordination multi-canaux incluant réseaux sociaux, email marketing, contenu vidéo et publicités payantes. Définition des KPIs, création de calendrier éditorial et analyse des performances hebdomadaires.',
      status: 'En attente',
      tasks: [
        { title: 'Définir objectifs', priority: 'Haute', status: 'Terminé' },
        { title: 'Créer visuels réseaux sociaux', priority: 'Moyenne', status: 'En cours' },
        { title: 'Rédaction contenu email', priority: 'Moyenne', status: 'En attente' },
        { title: 'Lancement campagne', priority: 'Haute', status: 'En attente' },
      ],
    },
    {
      id: 2,
      name: 'Application Mobile',
      description: 'Développement complet d\'une application mobile native pour iOS et Android. Intégration API complète, système d\'authentification sécurisé, push notifications et stockage de données local. Architecture MVVM, tests unitaires et intégration continue via CI/CD pipeline.',
      status: 'En cours',
      tasks: [
        { title: 'Setup projet', priority: 'Haute', status: 'Terminé' },
        { title: 'Création API', priority: 'Haute', status: 'En cours' },
        { title: 'Design UI', priority: 'Moyenne', status: 'En cours' },
        { title: 'Tests unitaires', priority: 'Moyenne', status: 'En attente' },
        { title: 'Publication sur App Store', priority: 'Haute', status: 'En attente' },
      ],
    },
    {
      id: 3,
      name: 'Migration Base de Données',
      description: 'Migration critique des données legacy vers la nouvelle architecture sécurisée et scalable. Implémentation de stratégies de backup, plan de rollback détaillé et validation complète des données post-migration. Zéro downtime migration avec synchronisation en temps réel.',
      status: 'Terminé',
      tasks: [
        { title: 'Backup données', priority: 'Haute', status: 'Terminé' },
        { title: 'Écriture script migration', priority: 'Haute', status: 'Terminé' },
        { title: 'Test migration', priority: 'Moyenne', status: 'Terminé' },
        { title: 'Déploiement production', priority: 'Haute', status: 'Terminé' },
      ],
    },
    {
      id: 4,
      name: 'Onboarding Nouveaux Employés',
      description: 'Création complète du processus d\'intégration pour les nouveaux employés. Manuel interne compréhensif, vidéos tutoriels interactives, sessions de formation en direct et suivi personnalisé. Documentation détaillée des procédures, accès aux ressources et introduction aux outils collaboratifs.',
      status: 'En attente',
      tasks: [
        { title: 'Rédaction manuel interne', priority: 'Moyenne', status: 'Terminé' },
        { title: 'Création vidéo tutoriel', priority: 'Moyenne', status: 'En attente' },
        { title: 'Organisation sessions onboarding', priority: 'Moyenne', status: 'En attente' },
      ],
    },
  ];

  project: IProject | null = null;

  ngOnChanges(changes: SimpleChanges) {
    const incomingProject = changes['addedProject']?.currentValue as IProject | null;

    if (!incomingProject) {
      return;
    }

    const alreadyExists = this.projects.some((project) => project.id === incomingProject.id);

    if (!alreadyExists) {
      this.projects = [incomingProject, ...this.projects];
      this.searched_project = '';
      this.selected_statuses.clear();
    }
  }



  openProjectDetails = (projectId: number) => {
    this.project = this.projects.find((p) => p.id === projectId) || null;
  };

  openEditProject = (project: IProject) => {
    this.projectSelected.emit(project);
    this.setIsEditProjectOpen(true);
  };

  searched_project: string = '';
  selected_statuses: Set<Status | string> = new Set();

  toggleStatusFilter = (status: Status | string) => {
    if (this.selected_statuses.has(status)) {
      this.selected_statuses.delete(status);
    } else {
      this.selected_statuses.add(status);
    }
  };

  removeStatusFilter = (status: Status | string) => {
    this.selected_statuses.delete(status);
  };

  resetStatus = () => {
    this.selected_statuses.clear();
  };

  get filtered_projects(): IProject[] {
    return this.projects.filter(
      (p) =>
        (this.selected_statuses.size === 0 || this.selected_statuses.has(p.status)) &&
        p.name.toLowerCase().includes(this.searched_project.toLowerCase())
    );
  }

  protected readonly StatusValues = StatusValues;
}
