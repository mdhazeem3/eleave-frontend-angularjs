import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, lastValueFrom, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
    URI = 'http://localhost:3000/api'
    user : any;
    currentUser! : Observable<any>;
    userSubject! : BehaviorSubject<any>;

    constructor(private http: HttpClient, private router: Router ){
        var user = localStorage.getItem('UserData')
        var json = user ? JSON.parse(user) : null
        if(json){
            console.log("lol")
            this.getRole(json).then(res =>{
                let userData = json as any;
                userData.role = res.role;
                this.user = userData;
                console.log(this.user)
            }).catch(err=>{
                console.log(err)
            })
        }else{
            
        }    
    }

    async getRole(user: any):Promise<any>{
        // let userData = JSON.parse(user)
        // console.log(userData)
        console.log("run ke")
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
          });

        const configUrl = `${this.URI}/getRole`
        return await lastValueFrom(this.http.post(configUrl, {'userId':user.id}, {headers, withCredentials:true}))
        
    }

    signUp(signupForm: FormGroup): Observable<any> {
        // console.log('hello singup run ke')
        const configUrl = 'http://localhost:3000/api/signup'; // Replace with your server endpoint
        return this.http.post(configUrl, signupForm.value)
      }
    
    login(loginForm: FormGroup): Observable<any> {
        // console.log('hello login run ke')
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
        });
    
        const configUrl = 'http://localhost:3000/api/login'; // Replace with your server endpoint
        return this.http.post(configUrl, loginForm.value, { headers, withCredentials: true })
      }

    logout(): Observable<any>{
        // console.log("Hello logout run ke")
        const configUrl = "http://localhost:3000/api/logout";
        
        return this.http.post(configUrl, {}, { withCredentials: true})
      }

    getCurrentUser(): Observable<any>{
      return this.http.get('http://localhost:3000/api/profile', {withCredentials: true})
    }


    getUsers(): Observable<any[]> {
      return this.http.get<any[]>('http://localhost:3000/api/users');
    }

    getUserById(userId: String): Observable<any[]> {
      return this.http.get<any[]>(`http://localhost:3000/api/userById/${userId}`);
    }

    //LEAVES//

    getLeaveTypes(): Observable<any[]>{
      return this.http.get<any[]>('http://localhost:3000/api/leavetype');
    }

    updateUserLeaves(userId: string, leaveData: any): Observable<any> {
      const url = `${this.URI}/user/leaves`;
      const body = { userId, ...leaveData };
  
      return this.http.put(url, body);
    }

    getUserLeaves(userId: string): Observable<any[]>{
      // return this.http.get<any[]>(`http://localhost:3000/api/getUserLeaves/${userId}`).pipe(
      //   map((data: any[])=>{
      //     return data.map(u=>({total: u.total}))
      //   })
      // )
      return this.http.get<any[]>(`http://localhost:3000/api/getUserLeaves/${userId}`)
    }

    public get currentUserValue(){return localStorage.getItem('UserData')}
    
}