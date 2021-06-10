import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_model/user';
import { UserserviceService } from '../_sevicse/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User('','', '', '', '','',[],[],[]);
  fd: FormData;

  constructor(public userService: UserserviceService, public router: Router) {

  }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  done(t) {
    t.click();
  }
  // tslint:disable-next-line:typedef
  change(e, t2) {
    // tslint:disable-next-line:prefer-const
    let file = e.target.files[0];
    // tslint:disable-next-line:prefer-const
    let reader = new FileReader();
    this.fd = new FormData();
    this.fd.append('file', file, file.name);
    reader.readAsDataURL(file);
    reader.onload = readerEvent => {
      // tslint:disable-next-line:prefer-const
      let content = readerEvent.target.result;
      t2.src = content;
    };
  }
  // tslint:disable-next-line:typedef
  addOne() {
    this.fd.append('username', this.user.username.toString());
    this.fd.append('password', this.user.password);
    this.fd.append('firstname', this.user.firstname.toString());
    this.userService.add(this.fd).subscribe(
      a => {
        console.log(a);
        this.router.navigateByUrl('login');
      },
      err => {
        console.log(err);
      }
    );
  }
}
