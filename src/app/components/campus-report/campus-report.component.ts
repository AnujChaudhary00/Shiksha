import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campus-report',
  templateUrl: './campus-report.component.html',
  styleUrls: ['./campus-report.component.css']
})
export class CampusReportComponent implements OnInit {

  constructor() { }

  genrateReport()
  {
    alert("Report genrated");
  }

  ngOnInit(): void {
  }

}
