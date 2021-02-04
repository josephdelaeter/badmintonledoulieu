import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  constructor(private User: UsersService) { }

  ngOnInit(): void {
  }
  
  onClick() {
    this.User.postNewUser(this.email, this.password)
  }


}
