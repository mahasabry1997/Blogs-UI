import { Component, OnInit } from '@angular/core';
import { Blog } from '../_model/blog';
import { BlogserviceService } from '../_sevicse/blogservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs: Blog[] = [];
  // tslint:disable-next-line:prefer-const

constructor(private blogService: BlogserviceService) { }
ngOnInit(): void {
  this.blogService.getHome().subscribe(
    d => {
      console.log(d);
      this.blogs = d;
    }
  );
}

}
