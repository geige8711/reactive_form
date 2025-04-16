import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormControl,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class CheckboxComponent implements OnInit {
  @Input({ required: true }) fieldName!: string;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value!: string;
  @Input({ required: true }) fieldIndex!: number;

  constructor(public parentForm: FormGroupDirective) {}
  ngOnInit(): void {
    this.parentForm.form.addControl(
      this.fieldName,
      new FormArray([
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
      ])
    );
  }
}
