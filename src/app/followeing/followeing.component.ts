import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_model/user';
import { UserserviceService } from '../_sevicse/userservice.service';

@Component({
  selector: 'app-followeing',
  templateUrl: './followeing.component.html',
  styleUrls: ['./followeing.component.css']
})
export class FolloweingComponent implements OnInit {
  luser:User=new User('','','','','','',[],[],[]);
  //alluser:User[];
  all:User[]=[];
  farr:User[]=[];
 lidu=localStorage.getItem('lid');

  constructor(public userService: UserserviceService,public router:Router ) { }



  username(id:string){
    localStorage.setItem('uid',id);
    this.router.navigateByUrl('anotherpage')
  }
  getfollowing(){
    this.farr=[];
    console.log(this.luser.Following.length);
    console.log(this.all.length);

    for(let i=0;i<this.all.length;i++){

        for(let j=0;j<this.luser.Following.length;j++){
          if(this.all[i]._id==this.luser.Following[j]){
            this.farr.push(this.all[i]);
          }


      }
      console.log(this.farr)
      console.log(this.all)
    }

    console.log(this.farr);
  }
  unfollow(id :string,u){
    return this.userService.unfollow(id,this.lidu).subscribe(
     a=>{


       u.disabled=true;
       this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/following']);
      });
     }
  )

    }

  ngOnInit(): void {
    this.userService.getbyid(this.lidu).subscribe(
      b=>{

        this.luser=b;})

    this.userService.getAll().subscribe(
      a=>{
      // console.log(a);
        this.all=a;

        this.getfollowing();
      }

    )

  }

  }
