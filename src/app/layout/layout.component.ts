import { Component } from '@angular/core';
import { IUser } from '../interfaces/interface';
import { Observable } from 'rxjs';
import { UserService } from '../Services/user/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public userId: number = 5135649182;

  constructor(private userService: UserService) {}
  user$: Observable<IUser> = this.userService.getUser(this.userId);
}
