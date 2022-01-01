import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor(private store: Store<any>, private router: ActivatedRoute, public authService: AuthService) {
    this.store.subscribe(data => this.user=data?.user?.user);
  }

  ngOnInit() {

    this.user = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
  }
}
