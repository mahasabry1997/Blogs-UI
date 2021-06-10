import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_model/user';
import { UserserviceService } from '../_sevicse/userservice.service';

@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.css']
})
export class SuggestedComponent implements OnInit {
  luser:User=new User('','','','','','',[],[],[]);
  all:User[]=[];
  farr:User[]=[];

 lidu=localStorage.getItem('lid');


  constructor( public userservice:UserserviceService,public router:Router) { }
  follow(id :string,f){
    console.log(id);
   return this.userservice.follow(id,this.lidu).subscribe(
    a=>{
      //console.log(a);
      f.disabled=true;
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/suggested']);
      });

    }

 )}
 getusers(){
  this.farr=[];
  for(let i=0;i<this.all.length;i++){
    let flag:Boolean=true;
    if(this.all[i]._id==this.luser._id){
      continue;
    }
      else{
      for(let j=0;j<this.luser.Following.length;j++){
        if(this.all[i]._id==this.luser.Following[j]){
          flag=false;
        }}
       if(flag){
           this.farr.push(this.all[i]);
          }


}

}
console.log(this.farr);
}


ngOnInit(): void {
  this.userservice.getbyid(this.lidu).subscribe(
    b=>{
      //console.log(b);
      this.luser=b;})

  this.userservice.getAll().subscribe(
    a=>{
      //console.log(a);
      this.all=a;

      this.getusers();
    }

  )

}

}
