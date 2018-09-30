import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-info-skills',
  templateUrl: './user-info-skills.component.html',
  styleUrls: ['./user-info-skills.component.scss']
})
export class UserInfoSkillsComponent implements OnInit {
  @Input()skill:string;

  constructor() { }

  ngOnInit() {
  }

}
