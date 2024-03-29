import { Component, Input } from '@angular/core';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user!: User;
  @Input() index!: number;
  @Input() lastItem!: boolean;

}
