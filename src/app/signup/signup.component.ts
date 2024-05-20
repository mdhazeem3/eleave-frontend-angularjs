import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  isExist: boolean=false;

  signupForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      // Validators.email
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phoneNo: new FormControl('', [
      Validators.required
      // Validators.
      // Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    role: new FormControl('', [
      Validators.required
    ])

  });

  constructor(private router: Router, private auth:AuthService){
    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value);
    })
  }

  signup() {
    this.auth.signUp(this.signupForm).subscribe(
      (res)=>{
        console.log(res)
        if(res.success && !res.exist){
          alert(res.messageSuccess);
          this.router.navigate(['/login']);
        }else{
          this.isExist=res.exist
        }
      },
      (err)=>{
        alert(err)
      },
      ()=>{
        console.log('Signup request completed');
      }
    )
  }
}
