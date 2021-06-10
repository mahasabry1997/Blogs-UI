import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../_model/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {
  constructor(public http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getHome() {
    return this.http.get<Blog[]>('http://localhost:3000/home');
  }
  // tslint:disable-next-line:typedef
  getUserBlogs() {
    return this.http.get<Blog[]>('http://localhost:3000/blog');
  }
  // tslint:disable-next-line:typedef
  add(fd: FormData) {
    return this.http.post<Blog>('http://localhost:3000/blog', fd);
  }
  // tslint:disable-next-line:typedef
  deleteBlog(id: string) {
    return this.http.delete('http://localhost:3000/blog/' + id);
  }
  // tslint:disable-next-line:typedef
  editBlog(id: string, blog: Blog) {
    return this.http.patch<Blog>('http://localhost:3000/blog/' + id , blog);
  }
  getblogs(id:string){
    return this.http.get<Blog[]>('http://localhost:3000/blog/all/'+id)
  }
}
