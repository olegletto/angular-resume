import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'resume';
  public user;


  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this._userService.getAll().subscribe(user => this.user = user);
  }
  

}
