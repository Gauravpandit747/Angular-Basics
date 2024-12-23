import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getApiData(){
    let data:any = this.http.get('https://jsonplaceholder.typicode.com/comments');
    return data;
  }

  getData(){ 
   let  users = [
      {name:'Gaurav', email:'gaurav@gmail.com', phone:'123456'},
      {name:'Kunal', email:'kunal@gmail.com', phone:'123456'},
      {name:'John', email:'john@gmail.com', phone:'123456'}, 
      {name:'travis', email:'travis@gmail.com', phone:'123456'},
      {name:'Tedd', email:'tedd@gmail.com', phone:'123456'},
      {name:'Roger', email:'Roger@gmail.com', phone:'123456'}
    ]
    return users;
  }
}
