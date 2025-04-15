import { Component, Input, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Option } from '../../types';

@Component({
  selector: 'app-dropdown',
  imports: [ReactiveFormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  title = input.required<string>();
  fieldName = input.required<string>();

  @Input({ required: true }) formGroup!: FormGroup;
  @Input({ required: true }) options!: Option[];
}
