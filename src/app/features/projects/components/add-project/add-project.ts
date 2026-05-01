import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProject, StatusValues } from '../../../../types/project-types';
import { Button } from '../button/button';

@Component({
  selector: 'app-add-project',
  imports: [ReactiveFormsModule, CommonModule, Button],
  templateUrl: './add-project.html',
  styleUrl: './add-project.css',
})
export class AddProject {
  @Output() close = new EventEmitter<void>();
  @Output() projectCreated = new EventEmitter<IProject>();
  protected readonly StatusValues = StatusValues;

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
      ]),
      description: new FormControl('', [
        Validators.maxLength(500),
      ]),
      status: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  project: IProject = {
    id: 0,
    name: '',
    description: '',
    status: StatusValues[0],
    tasks: [],
  };

  onSubmit() {
    if (this.form.invalid) {
      return ;
    }
    const newProject: IProject = {
      ...this.form.value,
      id: Date.now(),
      tasks: [],
    };

    this.projectCreated.emit(newProject);

    this.form.reset();
    this.close.emit();
  }

  onReset() {
    this.form.reset();
  }

  onClose() {
    if (this.form.dirty) {
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
