import { Component, input, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  imports: [ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css',
})
export class TextInputComponent {
  // @Input({ required: true }) title!: string;
  // @Input({ required: true }) fieldName!: string;
  // @Input() type: string = 'text';
  title = input.required<string>();
  fieldName = input.required<string>();
  type = input<string>('text');
  @Input({ required: true }) formGroup!: FormGroup;
}
