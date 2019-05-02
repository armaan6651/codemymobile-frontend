import {
  Component
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';


import {
  EmailValidator
} from '../validators/email';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  loginForm: FormGroup;
  notallowed: Boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = fb.group({
      email: ['',
        Validators.compose([Validators.required, EmailValidator.isValid])
      ]
    });
  }

  loginUser() {
    if (this.loginForm.value.email == 'codemymobile@gmail.com') {
      this.notallowed = false;
      this.router.navigateByUrl('/users');
    } else {
      this.notallowed = true;
    }
  }

}