import { FormArray, FormControl, FormGroup } from '@angular/forms';

export const markFormAsTouched = (form: FormGroup | FormArray) => {
  (Object as any)
    .values(form.controls)
    .forEach((control: FormControl | FormGroup | FormArray) => {
      control.markAsTouched();
      if (control instanceof FormGroup || control instanceof FormArray) {
        markFormAsTouched(control);
      }
    });
};
