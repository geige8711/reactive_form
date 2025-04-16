import { Component, forwardRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import dayjs from 'dayjs';
import {
  DpDatePickerModule,
  IDatePickerConfig,
  IDatePickerDirectiveConfig,
} from 'ng2-date-picker';
import { TextInputComponent } from './text-input/text-input.component';
import {
  FormArray,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DpDatePickerModule,
    TextInputComponent,
    ReactiveFormsModule,
    RadioButtonComponent,
    CheckboxComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'reactive-form-example';
  config: IDatePickerDirectiveConfig = {
    format: 'DD-MM-YYYY',
    disableKeypress: true,
    max: dayjs(),
  };
  form = new FormGroup({
    club: new FormControl('2', { validators: [Validators.required] }),
    email: new FormControl('', { validators: [Validators.required] }),
    firstName: new FormControl('', { validators: [Validators.required] }),
    lastName: new FormControl('', { validators: [Validators.required] }),
    dob: new FormControl('', { validators: [Validators.required] }),
    passwords: new FormGroup({
      password: new FormControl('', { validators: [Validators.required] }),
      rePassword: new FormControl('', { validators: [Validators.required] }),
    }),
    gender: new FormControl('o', { validators: [Validators.required] }),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
