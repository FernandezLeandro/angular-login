import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/Company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company!: Company;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.company = new Company();
  }

  nextPage(){

    this.router.navigate(['inspection/employee']);
  }

}
