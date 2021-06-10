import { Component, OnInit } from '@angular/core';
import { Blog } from '../_model/blog';
import { Comment } from '../_model/comment';
import { User } from '../_model/user';
import { BlogserviceService } from '../_sevicse/blogservice.service';
import { UserserviceService } from '../_sevicse/userservice.service';

@Component({
  selector: 'app-another-page',
  templateUrl: './another-page.component.html',
  styleUrls: ['./another-page.component.css']
})
export class AnotherPageComponent implements OnInit {
  user: User;
  // blogsi:string[]=[];
  blogs: Blog[] = [];
  luser = localStorage.getItem('lid');
  users: User[] = [];
  // tslint:disable-next-line:ban-types
  flags: Boolean[] = [];

  constructor(public userservice: UserserviceService, public blogservice: BlogserviceService) { }
  uid1 = localStorage.getItem('uid');
  // tslint:disable-next-line:typedef
  save(t: string, blog: Blog) {

    blog.comments.push(new Comment(this.luser, t));
    this.blogservice.editBlog(blog._id, blog).subscribe(
      a => {
        // console.log(a);
      }

    );
  }
  // tslint:disable-next-line:typedef
  showComment(blog: Blog, j: number) {
    this.flags[j] = !this.flags[j];
    this.users = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < blog.comments.length; i++) {
      this.userservice.getbyid(blog.comments[i].userId).subscribe(
        a => {
          this.users.push(a);
        }
      );
    }

  }

  ngOnInit(): void {
    this.userservice.getbyid(this.uid1).subscribe(
      a => {
        console.log(a);
        this.user = a;
      }
    );
    this.blogservice.getblogs(this.uid1).subscribe(
      a => {
        console.log(a);
        this.blogs = a;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.blogs.length; i++) {
          this.flags.push(false);
        }
        // console.log(this.flags);
      }
    );

  }}
