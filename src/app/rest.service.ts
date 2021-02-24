import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
  apiUrl = "http://localhost:5555/users";
  private headers= new Headers({'Content-Type': 'application/json'});

  getUsers(){
    return this.http.get(this.apiUrl)
  }

  addUsers(data){
    return this.http.post(this.apiUrl,data)
  }

  deleteUsers(id){
    let url = this.apiUrl + '/' + id ;
    return this.http.delete(url)
  }

  updateUsers(newObj:any,id){
    let url = this.apiUrl + '/' + id ;
    return this.http.put(url,newObj)
  }
}
