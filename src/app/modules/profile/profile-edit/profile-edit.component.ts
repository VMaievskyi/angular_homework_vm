import {Component, OnInit, ViewChild} from '@angular/core';
import {UserStore} from "../../../core/storage/user-store";
import {User} from "../../../core/auth/entity/user";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  @ViewChild("form") form: NgForm;
  user: User;

  constructor(private userStore: UserStore, private router: Router) { }

  ngOnInit() {
    this.user = this.userStore.get();
  }


  onSubmit():void {
    if(this.form.invalid){
      alert("form invalid")
    } else {
      this.userStore.update(this.user);
      this.router.navigateByUrl("profile")
    }
  }

}
