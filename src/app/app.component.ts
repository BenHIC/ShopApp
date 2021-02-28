import { Component, OnInit } from '@angular/core';
import { AuthSerivce } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shop App';
  // loadedFeature = 'recipe';

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
  constructor(private authService: AuthSerivce) { }

  ngOnInit() {
    this.authService.autoLogIn();
  }
}
