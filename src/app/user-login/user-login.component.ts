import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_model/user';
import { UserserviceService } from '../_sevicse/userservice.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User('','', '', '', '');
  constructor(public userservice: UserserviceService, public router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  Login() {
    this.userservice.userLogin(this.user).subscribe(
      a => {
        console.log(a);
        localStorage.setItem('token', a.token);

        localStorage.setItem('lid', a._id);
        this.router.navigateByUrl('userhome');
      }
    );

  }

}
