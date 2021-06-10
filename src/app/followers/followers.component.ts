import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_model/user';
import { UserserviceService } from '../_sevicse/userservice.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  luser:User=new User('','','','','','',[],[],[]);

  all:User[]=[];
  farr:User[]=[];
 lidu=localStorage.getItem('lid');




  constructor(public userService: UserserviceService,public router:Router) { }


  username(id:string){
    localStorage.setItem('uid',id);
    this.router.navigateByUrl('anotherpage')
  }
  getfollowers(){
    this.farr=[];

    for(let i=0;i<this.all.length;i++){

        for(let j=0;j<this.luser.Followers.length;j++){
          if(this.all[i]._id==this.luser.Followers[j]){
            this.farr.push(this.all[i]);
          }
        }


    }

    //console.log(this.luser.Followers);

  }

  ngOnInit(): void {
    this.userService.getbyid(this.lidu).subscribe(
      b=>{
        console.log(b);
        this.luser=b;})

    this.userService.getAll().subscribe(
      a=>{
        console.log(a);
        this.all=a;

        this.getfollowers();
      }

    )

  }

  }


