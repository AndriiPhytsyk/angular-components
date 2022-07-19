import { Component } from '@angular/core';
import { fadeInOutAnimation } from './animations/fade-in-out.animation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFormDirty } from './guards/form-dirty/form-dirty.interface';

@Component({
  selector: 'app-other-documentation',
  templateUrl: './other-documentation.component.html',
  styleUrls: ['./other-documentation.component.scss'],
  animations: [fadeInOutAnimation]
})
export class OtherDocumentationComponent implements IFormDirty {
  public isOn = true;
  public form!: FormGroup;

  public toggleAnimation(): void {
    this.isOn = !this.isOn;
  }

  constructor(private formBuilder: FormBuilder) {
    this.initializeForm();
  }

  public submit() {
    this.form.reset(this.form.value);
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
}
