import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {
  confirmationInformation = {
    companyInformation: {
      name: '',
      razonSocial: '',
      cuit: null,
    },
    employeeInformation: {
      name: '',
      surname: '',
      cuit: null,
      position: ''
    }   
  };

  constructor() { }

  getConfirmationInformation(){
    return this.confirmationInformation;
  }

  set setConfirmationInformation(confirmationInformation: any){
    this.confirmationInformation = confirmationInformation;
  }

  setCompanyInformation(companyInformation: any){
    this.confirmationInformation.companyInformation = companyInformation;
  }

  getCompanyInformation(){
    return this.confirmationInformation.companyInformation;
  }

}
