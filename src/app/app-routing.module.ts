import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendsoffriendsComponent } from './friendsoffriends/friendsoffriends.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'friends/:userId', component: FriendsComponent },
  { path: 'fof/:userId', component: FriendsoffriendsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
