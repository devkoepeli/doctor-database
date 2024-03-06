import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users!: User[];

  httpClient = inject(HttpClient);
  url = 'https://jsonplaceholder.typicode.com/users';

  ngOnInit() { 
    this.httpClient.get<User[]>(this.url).subscribe((users) => {
      this.users = users;
    });
  }
}
