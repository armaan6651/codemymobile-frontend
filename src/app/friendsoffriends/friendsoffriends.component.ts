import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  UserService
} from '../providers/user/user.service';

@Component({
  selector: 'app-friendsoffriends',
  templateUrl: './friendsoffriends.component.html',
  styleUrls: ['./friendsoffriends.component.scss']
})
export class FriendsoffriendsComponent implements OnInit {

  fof: any;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.fetchFOF(params.userId).then((data) => {
        console.log(data);
        this.fof = data;
      }).catch((data) => {
        console.log(data);
      });
    });
  }

}