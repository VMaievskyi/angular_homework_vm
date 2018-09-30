import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-info-details',
  templateUrl: './user-info-details.component.html',
  styleUrls: ['./user-info-details.component.scss']
})
export class UserInfoDetailsComponent implements OnInit {

   @Input() name: string;


  constructor() { }

  ngOnInit() {
  }

}
