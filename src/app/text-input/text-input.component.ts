import { Component, input, Input, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  bootstrapEyeFill,
  bootstrapEyeSlashFill,
} from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-text-input',
  imports: [ReactiveFormsModule, NgIcon],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css',
  viewProviders: [provideIcons({ bootstrapEyeFill, bootstrapEyeSlashFill })],
})
export class TextInputComponent {
  // @Input({ required: true }) title!: string;
  // @Input({ required: true }) fieldName!: string;
  // @Input() type: string = 'text';
  title = input.required<string>();
  fieldName = input.required<string>();
  type = input<string>('text');
  @Input({ required: true }) formGroup!: FormGroup;
  isHidden = signal<boolean>(true);

  onClick() {
    console.log('Clicked');
    this.isHidden.update((o) => !o);
  }
}
