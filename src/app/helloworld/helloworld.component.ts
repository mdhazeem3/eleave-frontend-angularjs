import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrl: './helloworld.component.css'
})
export class HelloworldComponent implements OnInit {
  user:string="1"
  user1:string=""

  constructor(private httpservice:HttpService){}
  
  ngOnInit(): void {
    
  }

}
