import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

function checkboxRobot(c: AbstractControl) {
  const v = c.value;
  return (v.checkbox === true) ? null : { isRobot: true };
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userLogin: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      checkbox: [false, { validators: checkboxRobot }]
    })
  }

  login() {
    console.log(this.userLogin.value)
  }

}
