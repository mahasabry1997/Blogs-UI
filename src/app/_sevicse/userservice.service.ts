import { Injectable } from '@angular/core';
import { User } from '../_model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }


  // tslint:disable-next-line:typedef
  add(fd: FormData) {
    return this.http.post<User>('http://localhost:3000/user/', fd);
  }

  // tslint:disable-next-line:typedef
  userLogin(user: User) {
    return this.http.post<User>('http://localhost:3000/user/login', user);
  }
  getbyid(id:string){
    return this.http.get<User>('http://localhost:3000/user/'+id)
  }
  follow(_fid:string,id:string){
    return this.http.post<any>('http://localhost:3000/user/follow/'+_fid,id);

  }
  unfollow(_fid:string,id:string){
    return this.http.post<any>('http://localhost:3000/user/unfollow/'+_fid,id);
  }
  getAll(){
    return  this.http.get<User[]>('http://localhost:3000/user/');
  }
}