import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-find-donar',
  templateUrl: './find-donar.component.html',
  styleUrls: ['./find-donar.component.css']
})
export class FindDonarComponent implements OnInit {

  constructor(public http:HttpClient) {
    this.http.get("http://localhost:8080/Details").subscribe((result)=>{
      this.list1=result;
    });
   }

  list1;
  ngOnInit(): void {
  }


 


deleteData()
{

}


}
