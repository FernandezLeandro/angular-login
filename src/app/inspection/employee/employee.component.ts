import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee!: Employee;
  personalInformation: any;

    submitted: boolean = false;

    constructor(private router: Router) { }

    ngOnInit() { 
        this.employee = new Employee();
    }

    nextPage() {

            this.router.navigate(['inspection/confirmation']);
        this.submitted = true;
    }
    prevPage(){
      this.router.navigate(['inspection/company']);
    }

}
