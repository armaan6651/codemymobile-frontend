import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsoffriendsComponent } from './friendsoffriends.component';

describe('FriendsoffriendsComponent', () => {
  let component: FriendsoffriendsComponent;
  let fixture: ComponentFixture<FriendsoffriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsoffriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsoffriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
