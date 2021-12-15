import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css'],
})
export class RegistrationformComponent implements OnInit {
  RegistrationForm = new FormGroup({
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
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,8}$/
      ),
    ]),
    confirm_password: new FormControl('', [Validators.required]),
    birth_day: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.RegistrationForm.value);
  }
}
