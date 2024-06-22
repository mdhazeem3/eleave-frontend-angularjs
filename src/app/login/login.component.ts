import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // email: string = "";
  // password: string = "";

  loginForm = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('')
  });

  constructor(private router: Router, private auth:AuthService){
    this.loginForm.valueChanges.subscribe((value) => {
      console.log(value);
    })
  }
  
  
  login() {
    // let data = this.loginForm.value;
    this.auth.login(this.loginForm).subscribe(
      {next:(res) => {
        // Success callback
        // alert(res.message);
        if (res.success == true) { 
          // localStorage.clear();
          let user = res.user;
          this.auth.user = { ...user, role: user.role };
          delete user.role;

          localStorage.setItem('UserData', JSON.stringify(res.user));
          // this.auth.userSubject.next(res.user)
          console.log(localStorage.getItem('UserData'))
        }
      },
      error: (err) => {
        alert("Something went wrong")
      },
      complete:() => {
        // Completion callback (optional)
        console.log('Login request completed');
        this.router.navigate(['/mainmenu']);
      }}
    );
  }
}
