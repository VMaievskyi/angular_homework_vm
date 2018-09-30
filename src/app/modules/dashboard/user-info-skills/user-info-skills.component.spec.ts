import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoSkillsComponent } from './user-info-skills.component';

describe('UserInfoSkillsComponent', () => {
  let component: UserInfoSkillsComponent;
  let fixture: ComponentFixture<UserInfoSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
