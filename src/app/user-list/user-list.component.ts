import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, lastValueFrom, tap } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: any[] = [];
  search = new FormControl('');

  constructor(private auth:AuthService, private router: Router){}

  ngOnInit(): void {
    this.auth.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  editUser(userId: String){
    // let user = lastValueFrom(this.auth.getUserById(userId));
    this.router.navigate(['/mainmenu/edituser', userId])
  }

  debounceSearch$ = this.search.valueChanges.pipe(
    distinctUntilChanged(),
    debounceTime(500),
    tap(console.log)
  )
}
