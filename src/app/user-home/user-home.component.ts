import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../_model/blog';
import { User } from '../_model/user';
import { BlogserviceService } from '../_sevicse/blogservice.service';
import { UserserviceService } from '../_sevicse/userservice.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  lid=localStorage.getItem('lid');
  puser:User=new User('','','','','','');

  blogs: Blog[] = [];
  // tslint:disable-next-line:prefer-const
  tempBlog: Blog;
  // tslint:disable-next-line:ban-types
  flags: Boolean[] = [];
  users: User[] = [];


  constructor(private blogService: BlogserviceService, public userservice: UserserviceService, public router: Router) { }
  ngOnInit(): void {
    this.blogService.getUserBlogs().subscribe(
      d => {
       // console.log(d);
        this.blogs = d;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.blogs.length; i++) {
          this.flags.push(false);
        }
      }
    );
    this.userservice.getbyid(this.lid).subscribe(
      a=>{
        console.log(a);
        this.puser=a;
        console.log(a.image);
      }
    )
  }

  // tslint:disable-next-line:typedef
  deleteBlog(id: string) {
    this.blogService.deleteBlog(id).subscribe(
      d => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/userhome']);
        });
      }
    );
  }
  // tslint:disable-next-line:typedef
  open(blog, t, b, m) {
    m.style.display = 'block';
    this.tempBlog = blog;

    t.value = blog.title;
    b.value = blog.body;
    console.log('Open Model');
  }
  // tslint:disable-next-line:typedef
  close(m) {
    m.style.display = 'none';
  }
  // tslint:disable-next-line:typedef
  saveEdite(t, b, e) {
    this.tempBlog.title = t.value;
    this.tempBlog.body = b.value;
    this.blogService.editBlog(this.tempBlog._id, this.tempBlog).subscribe(
      a => {
        e.style.display = 'none';
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/userhome']);
        });
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


}
