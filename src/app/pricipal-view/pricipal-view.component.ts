import { Component, OnInit } from '@angular/core';
import { USERS } from '../model/mock-users';
import { Usuario } from './usuario';



@Component({
  selector: 'app-pricipal-view',
  templateUrl: './pricipal-view.component.html',
  styleUrls: ['./pricipal-view.component.css']
})
export class PricipalViewComponent implements OnInit {
  users= USERS;
  model = new Usuario('', '', false, '');

  submitted= false;
  
  
  constructor() {}
  ngOnInit(): void {
      
  }

  newHero(){
    this.model = new Usuario('','',false,'');
  }
  onSubmit(): void{
    this.submitted = true;
  }
}
