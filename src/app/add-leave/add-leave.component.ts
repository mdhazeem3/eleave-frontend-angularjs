import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css']
})
export class AddLeaveComponent implements OnInit {
  user: any;
  leaveForm: FormGroup;
  leaves: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private location: Location,
    private fb: FormBuilder
  ) {
    this.leaveForm = this.fb.group({
      name: [{value:'', disabled:true}],
      email: [{value:'', disabled:true}],
      phoneNo: [{value:'', disabled:true}],
    });   
  }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async params => {
      this.user = await lastValueFrom(this.auth.getUserById(params['id']))

      this.leaveForm.patchValue({
        name: this.user.name,
        email: this.user.email,
        phoneNo: this.user.phoneNo,
      });
    })

    this.leaves = await this.getLeaveType();
    for(let d of this.leaves){
      this.leaveForm.addControl(
        d.type,
        new FormControl({
          value: d.total,
          disabled: true
        })
      )
    }
  }

  async getLeaveType(){
    return await lastValueFrom(this.auth.getLeaveTypes());
  }

  onChange(e: Event, name: string) {
    const isChecked = (e.target as HTMLInputElement).checked;
  
    isChecked ? this.f[name].enable() : this.f[name].disable()
  }

  onSubmit() {

    let data = Object.entries(this.leaveForm.value);
    let leaveDetails = <any>[];

      for(let out of data){
        leaveDetails.push({
          "type":out[0],
          "total":out[1]
        })
      }

    let update ={
      "userId":this.user._id,
      "leaveDetails": leaveDetails
    }

    console.log(update)

    if(this.leaveForm.disabled){
      return
    }

    if (this.user._id !== null) {

      this.auth.updateUserLeaves(this.user._id, update).subscribe(
        (response) => {
          console.log('User leaves updated successfully', response);
        },
        (error) => {
          console.error('Error updating user leaves', error);
        }
      );
    } else {
      console.error('User ID is null');
    }
  }

  goBack() {
    this.location.back();
  }

  get f(){return this.leaveForm.controls}
}