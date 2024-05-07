import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-side-nav',
  templateUrl: './setting-side-nav.component.html',
  styleUrls: ['./setting-side-nav.component.scss'],
})
export class SettingSideNavComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }

}
