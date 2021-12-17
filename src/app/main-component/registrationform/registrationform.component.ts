import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css'],
})
export class RegistrationformComponent implements OnInit {
  RegistrationForm: FormGroup;
  maxdate: Date;

  constructor(private formbuilder: FormBuilder) {
    this.maxdate = new Date();
    this.RegistrationForm = this.formbuilder.group(
      {
        first_name: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[A-Za-z][A-Za-z]{2,29}$/),
        ]),
        last_name: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[A-Za-z][A-Za-z]{2,29}$/),
        ]),
        mobile: new FormControl('', [
          Validators.required,
          // @TODO REGEX FOR PHONE NUMBER
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          ),
        ]),
        confirm_password: new FormControl('', [Validators.required]),
        birth_day: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
      },
      {
        validators: this.mustmatch('password', 'confirm_password'),
      }
    );
  }

  mustmatch(controlname: string, matchingcontrolname: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlname];
      const matchingcontrol = formGroup.controls[matchingcontrolname];
      if (matchingcontrol.errors && !matchingcontrol.errors.mustmatch) {
        return;
      }
      if (control.value !== matchingcontrol.value) {
        matchingcontrol.setErrors({ mustmatch: true });
      } else {
        matchingcontrol.setErrors(null);
      }
    };
  }
  ngOnInit(): void {}

  onSubmit() {
    console.log(this.RegistrationForm.value);
  }
}
