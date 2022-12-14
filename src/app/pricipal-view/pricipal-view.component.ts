import { Component, OnInit } from '@angular/core';
import { USERS } from '../model/mock-users';
import { User } from '../model/User';


@Component({
  selector: 'app-pricipal-view',
  templateUrl: './pricipal-view.component.html',
  styleUrls: ['./pricipal-view.component.css']
})
export class PricipalViewComponent implements OnInit {
  users= USERS;
  constructor() {}
  ngOnInit(): void {
      
  }
}
