import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router
} from '@angular/router';
import { filter } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private title: Title
  ) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(_ => {
        const { data } = this.route.root.firstChild?.snapshot || {};
        const mainTitle = 'Angular 100 challenge';

        if (data?.title) {
          const title = `${mainTitle} - ${data.title}`;
          this.title.setTitle(title);
        } else {
          this.title.setTitle(mainTitle);
        }
      });
  }
}
