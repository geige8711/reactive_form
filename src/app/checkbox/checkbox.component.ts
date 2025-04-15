import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
  @Input({ required: true }) fieldName!: string;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value!: string;
  @Input({ required: true }) formGroup!: FormGroup;
  // @Input({ required: true }) formArray!: FormArray;
  // @Input({ required: true }) formArrayName!: string;
  @Input({ required: true }) formControlName!: string;

  writeValue(value: string): void {
    this.value = value || '';
  }
}
