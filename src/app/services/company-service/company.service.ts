import { Injectable } from '@angular/core';
import { Company } from 'src/app/model/Company';
import { COMPANIES } from './../../model/mock-companies';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  getCompanies(){
    return COMPANIES;
  }
}
