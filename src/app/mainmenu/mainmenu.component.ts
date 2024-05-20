import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrl: './mainmenu.component.css',
})

export class MainmenuComponent implements OnInit{

  events: string[] = [];
  opened: boolean = false;

  UserData: any = localStorage.getItem('UserData')
  parsedUserData: any= JSON.parse(this.UserData)

  constructor(private router: Router, private auth:AuthService){
  }

  ngOnInit(): void {
    console.log(this.auth.user)
  }

  isAdmin():boolean{
    if(this.parsedUserData.role==='admin'){
      return true;
    }else{
      return false;
    }
  }

 logout(){
  this.auth.logout().subscribe(
    {next:(res) => {
      console.log("Logout successful");
      localStorage.clear()
      
    },
    error: (err) => {
      alert(err.message)
    },
    complete:() => {
      // Completion callback (optional)
      
      console.log('Logout request completed');
      this.router.navigate(["/login"])
    }}
  )
 }
}
