import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-cut-out',
  templateUrl: './banner-cut-out.component.html',
  styleUrls: ['./banner-cut-out.component.scss']
})
export class BannerCutOutComponent {
  @Input() public imageUrl = 'assets/component-banner.jfif';
  @Input() public title = '100 Angular Challenge';
}
