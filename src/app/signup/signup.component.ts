import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from '../models/User';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
SignupForm : FormGroup;
user : User;
errMess : String;
formErrors = {
  'username': '',
  'password': '',
};
validationMessages = {
  'username': {
    'required': 'username is required',
    'minlength': 'username must be at least 2 caracters long',
    'maxlength': 'username cannot be more than 25 caracters'
  },
  'password': {
    'required': 'password is required',
    'minlength': 'password must be at least 8 caracters long',
    'maxlength': 'password cannot be more than 25 caracters'
  },
 
};
constructor(private fb: FormBuilder,
  private UserService: UserService
  ,private router:Router) {
  this.createForm();
}

ngOnInit() {
}
createForm() {
  this.SignupForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
    password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
  });
  this.SignupForm.valueChanges
    .subscribe(data => this.onValueChanged(data));
  this.onValueChanged();//reset form validation messages
}
onValueChanged(data?: any) {
  if (!this.SignupForm) { return; }
  const form = this.SignupForm;
  for (const field in this.formErrors) {
    if (this.formErrors.hasOwnProperty(field))
    //clear previous error messages
    {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          if (control.errors.hasOwnProperty(key)) {
            this.formErrors[field] += messages[key] + '';
          }
        }
      }
    }

  }
}
onSubmit() {
  this.user = this.SignupForm.value;
  this.UserService.submitSignup(this.user)
    .subscribe(user => {
      this.user = user;
      this.router.navigate(['login']);
    }, errmess => { this.user = null; this.errMess = <any>errmess });
  this.SignupForm.reset({
    username: '',
    password: '',
  });
}


}
