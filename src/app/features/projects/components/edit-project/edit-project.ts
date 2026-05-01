import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { IProject, StatusValues } from '../../../../types/project-types';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';

@Component({
  selector: 'app-edit-project',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, Button],
  templateUrl: './edit-project.html',
})
export class EditProject implements OnInit {

  @Input() project!: IProject | null;

  @Output() close = new EventEmitter<void>();
  @Output() projectUpdated = new EventEmitter<IProject>();

  protected readonly StatusValues = StatusValues;

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.project?.name || '', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
      ]),
      description: new FormControl(this.project?.description || '', [
        Validators.maxLength(500),
      ]),
      status: new FormControl(this.project?.status || '', [
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const updatedProject: IProject = {
      ...this.project,
      ...this.form.value,
    };

    this.projectUpdated.emit(updatedProject);

    this.close.emit();
  }

  onReset() {
    if (this.project) {
      this.form.patchValue(this.project);
    }
  }

  onClose() {
    if (this.form.dirty) {
      const shouldDiscard = confirm(
        'Vous avez des modifications non sauvegardées. Voulez-vous fermer sans enregistrer ?'
      );

      if (!shouldDiscard) return;
    }
    this.close.emit();
  }
}
