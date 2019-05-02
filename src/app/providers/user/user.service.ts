import { Injectable } from '@angular/core';
import { APIService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users:any;
  constructor(public api: APIService) { }

  fetchUsers() {
    var promise = new Promise((resolve, reject) => {
      this.api.get('users').subscribe(data => {
        if (data.status == 200) {
          resolve(data.json());
        } else {
          reject("Unable to fetch users");
        }
      });
    });
    return promise;
  }

  fetchFriends(uid) {
    var promise = new Promise((resolve, reject) => {
      this.api.get('friends/'+uid).subscribe(data => {
        if (data.status == 200) {
          resolve(data.json());
        } else {
          reject("Unable to fetch users");
        }
      });
    });
    return promise;
  }

  fetchFOF(uid) {
    var promise = new Promise((resolve, reject) => {
      this.api.get('friends/fof/'+uid).subscribe(data => {
        if (data.status == 200) {
          resolve(data.json());
        } else {
          reject("Unable to fetch users");
        }
      });
    });
    return promise;
  }
}
