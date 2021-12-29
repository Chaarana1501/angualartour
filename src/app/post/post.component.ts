import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AddPostService} from '../add-post.service';
import {PostPayload} from '../add-post/post-payload';

// @ts-ignore
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post!: PostPayload;
  permaLink!: Number;

  constructor(private router: ActivatedRoute, private postService: AddPostService,private routerRedirect: Router) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.permaLink = params['id'];
    });

    this.postService.getPost(this.permaLink).subscribe((data:PostPayload) => {
      this.post = data;
    },(err: any) => {
      console.log('Failure Response');
    })
  }
  onDelete(){
    this.postService.deletePost(this.permaLink).subscribe((data:PostPayload) => {
      this.routerRedirect.navigateByUrl('/');
    },(err: any) => {
      console.log('Failure Response');
    })

  }
}
