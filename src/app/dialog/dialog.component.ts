import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);
}
