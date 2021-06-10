import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../_model/blog';
import { BlogserviceService } from '../_sevicse/blogservice.service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {
  blog: Blog = new Blog('', '' , '', [],'', new Date());
  fd: FormData;

  constructor(public blogService: BlogserviceService , public router: Router) { }
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
    this.fd.append('title', this.blog.title.toString());
    this.fd.append('auther', this.blog.auther.toString());
    this.fd.append('body', this.blog.body.toString());

    this.blogService.add(this.fd).subscribe(
      a => {
        console.log(a);
        this.router.navigateByUrl('userhome');
      },
      err => {
        console.log(err);
      }
    );
  }
}
