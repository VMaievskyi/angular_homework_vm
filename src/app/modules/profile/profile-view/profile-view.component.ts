import { Component, OnInit } from '@angular/core';
import {UserStore} from "../../../core/storage/user-store";
import {User} from "../../../core/auth/entity/user";

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  user: User

  constructor(private userStore:UserStore) { }

  ngOnInit() {
    this.user = this.userStore.get();
  }



}
