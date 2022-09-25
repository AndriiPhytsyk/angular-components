import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ControlItem } from '../../models/frontend';
import { NotificationService } from '../../services';
import { markFormAsTouched } from '../../shared';
import { regexErrors, regex } from '../../shared/utils';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  form!: FormGroup;
  isInline: boolean = false;
  regexErrors = regexErrors;
  items: ControlItem[] = [
    { label: 'First', value: 1 },
    { label: 'Second', value: 2 },
    { label: 'Third', value: 3 },
    { label: 'Forth', value: 4 }
  ];

  showSpinner = false;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [
        null,
        {
          updateOn: 'change',
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.email)
          ]
        }
      ],
      password: [
        null,
        {
          updateOn: 'change',
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.password)
          ]
        }
      ],
      select: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required]
        }
      ],
      autocomplete: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required]
        }
      ],
      checkboxes: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required]
        }
      ],
      radios: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required]
        }
      ],
      date: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required]
        }
      ],
      dateRange: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required]
        }
      ]
    });
  }

  get test() {
    return '123';
  }

  get inputControl(): AbstractControl | null {
    return this.form.get('input');
  }

  onPatchValue(): void {
    this.form.patchValue({
      input: 'test',
      select: 1,
      checkboxes: [1, 2],
      radios: 1,
      autocomplete: 1,
      password: 'password',
      date: new Date().getTime(),
      dateRange: {
        from: new Date(2019, 5, 10).getTime(),
        to: new Date(2019, 5, 25).getTime()
      }
    });
  }

  onSubmit(): void {
    console.log('Submit');
    if (this.form.invalid) {
      markFormAsTouched(this.form);
    }
  }

  toggleInline(): void {
    this.isInline = !this.isInline;
  }

  changed(event: any) {
    console.log(event);
  }

  toggleDisable() {
    if (this.form.disabled) {
      this.form.enable();
    } else {
      this.form.disable();
    }
  }

  onToggleSpinner() {
    this.showSpinner = !this.showSpinner;
  }

  onError() {
    this.notificationService.error('Something went wrong!');
  }

  onSuccess() {
    this.notificationService.success('Everything is good!');
  }
}
