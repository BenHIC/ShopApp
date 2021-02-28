import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthSerivce } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  user = '';
  isAuthenticated = false;
  collapsed = true;
  @Output() featureSelected = new EventEmitter<string>();

  private userSub: Subscription;

  constructor(private dataStorageService: DataStorageService, private authService: AuthSerivce) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      if (!!user) {
        this.user = this.authService.user.value.email;
      }
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onLogOut() {
    this.authService.logOut();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
