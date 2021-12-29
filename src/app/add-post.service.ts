import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostPayload} from './add-post/post-payload';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private httpClient: HttpClient) {
  }

  addPost(postPayload: PostPayload) {
    return this.httpClient.post(environment.baseUrl + 'api/posts/', postPayload);
  }

  getAllPosts(): Observable<Array<PostPayload>> {
    return this.httpClient.get<Array<PostPayload>>(environment.baseUrl + 'api/posts/all');
  }

  getPost(permaLink: Number):Observable<PostPayload> {
    return this.httpClient.get<PostPayload>(environment.baseUrl + 'api/posts/get/' + permaLink);
  }
}

