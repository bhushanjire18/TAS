import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('john.doe@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('John@123', [Validators.required, Validators.minLength(6),Validators.pattern(/[A-Z]/)])
  })
  constructor(
    private __router: Router,
    private __toast: ToastService,
    private __apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let postData = {
        emailId: this.loginForm.value.username,
        password: this.loginForm.value.password
      }

      //login API request
      this.__apiService.request('post', 'login', postData).subscribe((responce: any) => {
        if (responce.statusCode == 200) {
          this.__router.navigateByUrl('/patient');
          this.__toast.showSuccess(responce.message)
        } else {
          this.__toast.showError(responce.message)
        }
      })
    } else {
      console.log('Invalid form', this.loginForm);

    }
  }

}
