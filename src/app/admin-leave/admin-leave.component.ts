import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-admin-leave',
  templateUrl: './admin-leave.component.html',
  styleUrl: './admin-leave.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminLeaveComponent implements OnInit{
  leaves: any[] = []
  user:string = ''
  constructor(private auth:AuthService){}

  readonly dialog = inject(MatDialog);

    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(DialogComponent, {
        width: '250px',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.auth.getLeaveApplication().subscribe(data=>{
      this.leaves = data;
    })
  }
}
