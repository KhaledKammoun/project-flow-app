import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProject, StatusValues } from '../../../../types/project-types';
import { Button } from '../button/button';

@Component({
  selector: 'app-add-project',
  imports: [FormsModule, CommonModule, Button],
  templateUrl: './add-project.html',
  styleUrl: './add-project.css',
})
export class AddProject {
  @Output() close = new EventEmitter<void>();
  @Output() projectCreated = new EventEmitter<IProject>();
  protected readonly StatusValues = StatusValues;

  project: IProject = {
    id: 0,
    name: '',
    description: '',
    status: StatusValues[0],
    tasks: [],
  };

  onSubmit(form: any) {
    const newProject: IProject = {
      ...this.project,
      id: Date.now(),
      tasks: [],
    };

    this.projectCreated.emit(newProject);

    this.project = {
      id: 0,
      name: '',
      description: '',
      status: StatusValues[0],
      tasks: [],
    };

    form.resetForm();
    this.close.emit();
  }

  onReset(form: any) {
    form.resetForm();
  }

  onClose(form: any) {
    if (form?.dirty) {
      const shouldDiscard = confirm(
        'Vous avez des modifications non sauvegardées. Voulez-vous fermer sans enregistrer ?'
      );

      if (!shouldDiscard) {
        return;
      }
    }
    this.close.emit();
  }
}
