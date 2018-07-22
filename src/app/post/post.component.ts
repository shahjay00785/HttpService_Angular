import { Http } from '@angular/http';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      //console.log(response);
      this.posts = response.json();
      //console.log(response.json());
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.service.createPost(post).subscribe(response => {
      post['id'] = response.json().id;
      //console.log(response.json());
      this.posts.splice(0, 0, post);
    });
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe(response => {
      console.log(response);
    });
  }

  deletePost(post) {
    this.service.deletePost(post.id).subscribe(response => {
      let index = this.posts.indexOf('post');
      //
      this.posts.splice(index, 1);
    });
  }

  /* Before Service Sepeation */
  /*
  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
     http.get(this.url).subscribe(response => {
      //console.log(response);
      this.posts = response.json();
      //console.log(response.json());
    });
    
}

  ngOnInit() {
    this.http.get(this.url).subscribe(response => {
      //console.log(response);
      this.posts = response.json();
      //console.log(response.json());
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
      post['id'] = response.json().id;
      //console.log(response.json());
      this.posts.splice(0, 0, post);
    });
  }

  updatePost(post) {
    this.http
      .patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id).subscribe(response => {
      let index = this.posts.indexOf('post');
      //
      //this.posts.splice(index, 1);
    });
  }
  */
}
