import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InspectionService } from 'src/app/services/inspection/inspection.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  confirmationInformation : any;
  constructor(private router: Router, private inspectionService: InspectionService) { }

  ngOnInit(): void {
    this.confirmationInformation = this.inspectionService.getConfirmationInformation();
  }
  confirm() {
    alert('You have confirmed')
  }
  prevPage(){
    this.router.navigate(['inspection/employee']);
  }
}
