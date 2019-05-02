import { Component, OnInit } from '@angular/core';
import { UserService } from '../providers/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.fetchUsers().then((data) => {
      console.log(data);
      this.users = data;
    }).catch((data) => {
      console.log(data);
    });
  }

  getFriends(i) {
    this.router.navigateByUrl('/friends/' + this.users.data[i].email);
  }

  getFriendsOfFriends(i) {
    this.router.navigateByUrl('/fof/' + this.users.data[i].email);
  }

}
