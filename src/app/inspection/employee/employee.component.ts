import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';
import { InspectionService } from 'src/app/services/inspection/inspection.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee!: Employee;
  personalInformation: any;

    submitted: boolean = false;

    constructor(
      private router: Router,
      private inspectionService: InspectionService) { }

    ngOnInit() { 
        this.employee = new Employee();
        this.personalInformation = this.inspectionService.getEmployeesInformation();
        //this.personalInformation.cuit = null;
    }

    prevPage(){
      this.router.navigate(['inspection/company']);
    }

    nextPage() {
      this.inspectionService.setEmployeesInformation(this.personalInformation);
      this.router.navigate(['inspection/confirmation']);
      this.submitted = true;
    }


}
