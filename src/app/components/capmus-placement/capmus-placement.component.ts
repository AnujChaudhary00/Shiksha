import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-capmus-placement',
  templateUrl: './capmus-placement.component.html',
  styleUrls: ['./capmus-placement.component.css']
})
export class CapmusPlacementComponent implements OnInit {

  constructor(public http:HttpClient) { }
  branches=["Select","A","A+","B","B+", "AB","AB+","O+","O-"];

  var_contact=""
  var_name=""
  var_email=""
  var_bloodgroup=""
  var_gender=""
  var_date=""
  var_test=""
  var_address=""

  register_clickHandler()
  {


    var applicant= {
      "name": this.var_name,
      "emailId": this.var_email,
      "contactno": this.var_contact,
      "gender": this.var_gender,
      "bloodgroup": this.var_bloodgroup,
      "dob": this.var_date,
      "address": this.var_address
  }

    this.http.post<any>("http://localhost:8080/Details",applicant).subscribe(tr=>{
      alert("success");
    });
    
    
  }



  ngOnInit(): void {
  }

}
