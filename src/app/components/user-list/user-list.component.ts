import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserComponent, AsyncPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users!: User[];
  users$!: Observable<User[]>;

  userService = inject(UserService)

  ngOnInit() { 
    this.users$ = this.userService.getUser();
  }
}
