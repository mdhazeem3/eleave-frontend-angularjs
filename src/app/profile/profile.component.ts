import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  isEditMode: boolean = false;

  user: any = {
    name: '',
    email: '',
    phoneNo: ''
  };

  constructor(private auth: AuthService){}

  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe((res) => {
      this.user = res.user;
    }, error => {
      console.error('Error fetching user data', error);
    });
  }

  toggleEdit(){
    this.isEditMode = !this.isEditMode;
  }
}
