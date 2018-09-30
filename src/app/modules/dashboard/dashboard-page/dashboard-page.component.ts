import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserStore } from '../../../core/storage/user-store';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../../core/auth/entity/user';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  user: User;
  userStoreSubscription: Subscription;

  constructor(
    private userStore: UserStore
  ) { }

  ngOnInit() {
    this.userStoreSubscription = this.userStore.$get()
      .subscribe((user: User) => {
        this.user = user;
      });
  }

  ngOnDestroy(): void {
    this.userStoreSubscription.unsubscribe();
  }

}
