import { Component, Input, Output, EventEmitter} from '@angular/core';
import { NgIf , NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  ngOnInit(): void{
    console.log("::::::::::::::::::::::")
  }

  name = "";
  isDisabled = false;
  show = true;
  color = "Red";
  getDataKeyUp(val:string){
    console.warn(val);
  };

  users = [
    {name:'Gaurav', email:'gaurav@gmail.com', phone:'123456'},
    {name:'Kunal', email:'kunal@gmail.com', phone:'123456'},
    {name:'John', email:'john@gmail.com', phone:'123456'}, 
    {name:'travis', email:'travis@gmail.com', phone:'123456'},
    {name:'Tedd', email:'tedd@gmail.com', phone:'123456'},
    {name:'Roger', email:'Roger@gmail.com', phone:'123456'}
  ]

  changeColor(){
    this.color = "Purple";
  }

  getFormData(data:any){
    console.log(data)
  }

  @ Input() item=0
  
  @Output() updateDataEvent = new EventEmitter<string>();

}
