import { Component, OnInit } from '@angular/core';
import { Users } from "../../Models/Users";
import { UserService } from "../../Services/user.service";

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  users: Users[];

  constructor(
    private us: UserService
  ) { }

  ngOnInit(): void {

    this.getUsers();
  }

  getUsers() {
    this.us.getUsers().subscribe(users => this.users = users);
  }

}
