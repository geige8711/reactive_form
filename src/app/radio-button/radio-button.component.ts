import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  imports: [ReactiveFormsModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.css',
})
export class RadioButtonComponent {
  @Input({ required: true }) fieldName!: string;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value!: string;
  @Input({ required: true }) formGroup!: FormGroup;
}
