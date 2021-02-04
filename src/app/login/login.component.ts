import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email:string ='';
  public password:string='';

  constructor(private User: UsersService) { }

  ngOnInit(): void {
  }
  onClick(){
    this.User.postLogin(this.email,this.password);
  }

}
