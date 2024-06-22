import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.css'
})
export class HeaderLayoutComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @Input() sidenavRef!: MatSidenav

  constructor(private router: Router, private auth:AuthService, private sideNavService: SideNavService){
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

   clickMenu() { 
    this.sideNavService.toggle();
  }
}
