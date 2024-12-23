import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { DataServiceService } from './services/data-service.service';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterComponent, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data1 =[]
  new_data: any;
  constructor(private dataService: DataServiceService) {
    // const data1:any = dataService.getData();
    // console.log(data1);

    let apiData:any = [];
    let new_data:any = [];
    apiData = dataService.getApiData();
    console.log(apiData.subscribe((ele:any)=>{
      this.new_data = ele
    }));
  }
  title = 'blog';
  data = "How I met your Mother";
  dataToTransfer = 100
   getData(){
    return 101;
  }

  childToParent(item:string){
    console.log(item);
  }
}
